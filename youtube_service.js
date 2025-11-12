// YouTube API service wrapper
window.YouTubeService = (function(){
  function parseISODurationToSeconds(iso){
    // Example: PT1H2M10S, PT7M3S, PT45S
    const re = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const m = re.exec(iso || '') || [];
    const h = parseInt(m[1] || '0', 10);
    const min = parseInt(m[2] || '0', 10);
    const s = parseInt(m[3] || '0', 10);
    return h*3600 + min*60 + s;
  }

  function buildSearchUrl(query){
    const cfg = window.REC_CONFIG || {};
    const key = cfg.YOUTUBE_API_KEY;
    const max = cfg.max_results || 3;
    const region = cfg.region || 'IN';
    const params = new URLSearchParams({
      key: key || '',
      q: query,
      part: 'snippet',
      maxResults: String(max),
      type: 'video',
      regionCode: region,
      order: 'viewCount'
    });
    return `https://www.googleapis.com/youtube/v3/search?${params.toString()}`;
  }

  function buildVideosDetailsUrl(ids){
    const cfg = window.REC_CONFIG || {};
    const key = cfg.YOUTUBE_API_KEY;
    const params = new URLSearchParams({
      key: key || '',
      id: ids.join(','),
      part: 'contentDetails'
    });
    return `https://www.googleapis.com/youtube/v3/videos?${params.toString()}`;
  }

  async function fetchVideos(query){
    const cfg = window.REC_CONFIG || {};
    if (!cfg.use_youtube_api) return [];
    if (!cfg.YOUTUBE_API_KEY) {
      console.warn('YouTube API key missing in REC_CONFIG');
      return [];
    }
    const url = buildSearchUrl(query);
    const res = await fetch(url);
    if (!res.ok) throw new Error('YouTube API request failed');
    const data = await res.json();
    const rawItems = (data.items || []).filter(it => it.id && it.id.videoId);
    if (rawItems.length === 0) return [];

    // Fetch durations
    const ids = rawItems.map(it => it.id.videoId);
    const detailsUrl = buildVideosDetailsUrl(ids);
    const dres = await fetch(detailsUrl);
    if (!dres.ok) throw new Error('YouTube videos details request failed');
    const ddata = await dres.json();
    const detailsById = {};
    (ddata.items || []).forEach(v => { detailsById[v.id] = v; });

    const minMinutes = (cfg.min_duration_minutes || 5);
    const minSeconds = minMinutes * 60;

    const items = rawItems.map(it => {
      const id = it.id.videoId;
      const title = (it.snippet && it.snippet.title) || 'YouTube Video';
      const embedUrl = id ? `https://www.youtube.com/watch?v=${id}` : '#';
      const cd = detailsById[id] && detailsById[id].contentDetails;
      const durationSec = cd && cd.duration ? parseISODurationToSeconds(cd.duration) : 0;
      return { title, url: embedUrl, type: 'video', durationSec };
    }).filter(v => v.durationSec >= minSeconds);

    return items.map(({title, url}) => ({ title, url, type: 'video' }));
  }

  return { fetchVideos };
})();
