// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-papers",
          title: "papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://paint-soccer-637.notion.site/29aa1acebe298180a55fd40229ea2f89?v=29aa1acebe29816baeaf000ca9fe91d6";
              },
            },{id: "dropdown-florilegium",
              title: "florilegium",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://paint-soccer-637.notion.site/296a1acebe298052956dc63b5ee1814e?v=296a1acebe2981c8925e000c90caffac";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-attended-my-first-netsci-conference-in-maastricht-netherlands-with-a-contributed-talk",
          title: 'Attended my first NetSci conference in Maastricht, Netherlands with a contributed talk.',
          description: "",
          section: "News",},{id: "news-submitted-and-successfully-defended-my-master-s-thesis-on-optimal-networks-and-graduated-from-the-university-of-bonn",
          title: 'Submitted and successfully defended my Master’s thesis on optimal networks and graduated from...',
          description: "",
          section: "News",},{id: "news-i-started-my-ph-d-in-informatics-at-indiana-univeristy-bloomington",
          title: 'I started my Ph.D. in Informatics at Indiana Univeristy Bloomington!',
          description: "",
          section: "News",},{id: "projects-prediction-markets-as-complex-adaptive-systems",
          title: 'Prediction Markets as Complex Adaptive Systems',
          description: "Final Paper for Advanced Seminar on Complex Systems that has resulted in an ongoing collaboration to use hyper neural networks and agent-based modelling to study behavior on prediction markets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-bridge-criticality-in-a-spatial-road-network",
          title: 'Bridge Criticality in a Spatial Road Network',
          description: "Ongoing research with Prof. Filippo Radicchi at Indiana University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
