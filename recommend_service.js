// Recommendation orchestrator: combines YouTube videos and curated docs
window.RecommendService = (function(){
  function getTier(percent){
    if (percent < 60) return 'low';
    if (percent < 80) return 'mid';
    return 'high';
  }

  function getDocRecs(testType, tier){
    const cfg = window.REC_CONFIG || {};
    const docs = (cfg.docs && cfg.docs[testType] && cfg.docs[testType][tier]) || [];
    return docs.map(d => ({ title: d.title, url: d.url, type: 'doc' }));
  }

  async function getVideoRecs(testType, tier, weakTerms){
    // Build a simple query per domain and tier
    const baseQueries = {
      java: 'Java tutorial basics',
      oops: 'OOP concepts in Java',
      sql: 'SQL tutorial joins group by',
      javaCoding: 'Java tricky interview questions'
    };
    const tierHints = { low: 'beginner', mid: 'intermediate', high: 'advanced' };
    const primary = (Array.isArray(weakTerms) && weakTerms.length > 0)
      ? weakTerms[0]
      : (baseQueries[testType] || 'programming');
    const query = `${primary} ${tierHints[tier] || ''}`.trim();
    try {
      const vids = await window.YouTubeService.fetchVideos(query);
      return vids;
    } catch (e) {
      console.warn('YouTube fetch failed:', e);
      return [];
    }
  }

  async function getRecommendations(testType, percent, weakTerms){
    const tier = getTier(percent);
    const [videos, docs] = await Promise.all([
      getVideoRecs(testType, tier, weakTerms),
      Promise.resolve(getDocRecs(testType, tier))
    ]);
    // Interleave videos and docs for variety
    const out = [];
    const maxLen = Math.max(videos.length, docs.length);
    for (let i=0;i<maxLen;i++){
      if (videos[i]) out.push(videos[i]);
      if (docs[i]) out.push(docs[i]);
    }
    return out;
  }

  return { getRecommendations };
})();
