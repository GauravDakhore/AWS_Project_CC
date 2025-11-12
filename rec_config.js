// Recommendation configuration and curated fallback links
window.REC_CONFIG = {
  use_youtube_api: true, // set to true after adding your API key
  YOUTUBE_API_KEY:"AIzaSyDC0YCZ97ueNvZqvlqcX69eL9m7Jj6rtHI", // put your key here or inject at runtime
  region: "IN",
  max_results: 3,

  // Curated documentation links per domain and tier
  docs: {
    java: {
      low: [
        {
          title: "Java Tutorial (W3Schools)",
          url: "https://www.w3schools.com/java/",
        },
        {
          title: "Java Basics - Baeldung",
          url: "https://www.baeldung.com/java-tutorial",
        },
      ],
      mid: [
        {
          title: "OOP in Java - Baeldung",
          url: "https://www.baeldung.com/java-inheritance",
        },
        {
          title: "Exceptions - Oracle Docs",
          url: "https://docs.oracle.com/javase/tutorial/essential/exceptions/",
        },
      ],
      high: [
        {
          title: "Effective Java Notes",
          url: "https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/",
        },
        {
          title: "Java Generics - Baeldung",
          url: "https://www.baeldung.com/java-generics",
        },
      ],
    },
    oops: {
      low: [
        {
          title: "OOP Concepts in Java - GfG",
          url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
        },
        {
          title: "Classes and Objects - Oracle",
          url: "https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html",
        },
      ],
      mid: [
        {
          title: "Abstraction vs Encapsulation",
          url: "https://www.baeldung.com/java-encapsulation-abstraction",
        },
        {
          title: "Polymorphism - Oracle Tutorial",
          url: "https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html",
        },
      ],
      high: [
        {
          title: "Design Patterns - Refactoring.Guru",
          url: "https://refactoring.guru/design-patterns",
        },
        {
          title: "SOLID Principles - Baeldung",
          url: "https://www.baeldung.com/solid-principles",
        },
      ],
    },
    sql: {
      low: [
        {
          title: "SQL Tutorial - W3Schools",
          url: "https://www.w3schools.com/sql/",
        },
        { title: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
      ],
      mid: [
        {
          title: "SQL JOINs - Visual Guide",
          url: "https://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins",
        },
        {
          title: "GROUP BY - Mode",
          url: "https://mode.com/sql-tutorial/sql-group-by/",
        },
      ],
      high: [
        {
          title: "Window Functions - PostgreSQL Docs",
          url: "https://www.postgresql.org/docs/current/tutorial-window.html",
        },
        {
          title: "Advanced SQL Queries - DataCamp",
          url: "https://www.datacamp.com/blog/advanced-sql-queries",
        },
      ],
    },
    javaCoding: {
      low: [
        {
          title: "Java Operators - Baeldung",
          url: "https://www.baeldung.com/java-operators",
        },
        {
          title: "Control Flow - Oracle",
          url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html",
        },
      ],
      mid: [
        {
          title: "Autoboxing and Caching",
          url: "https://www.baeldung.com/java-primitive-reference-comparison",
        },
        {
          title: "Exceptions - Oracle Docs",
          url: "https://docs.oracle.com/javase/tutorial/essential/exceptions/",
        },
      ],
      high: [
        {
          title: "Java Language Spec",
          url: "https://docs.oracle.com/javase/specs/",
        },
        {
          title: "Collections Performance - Baeldung",
          url: "https://www.baeldung.com/java-collections-performance",
        },
      ],
    },
  },
};
