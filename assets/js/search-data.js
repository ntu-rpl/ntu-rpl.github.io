// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-2025-rpl",
    title: "2025 RPL",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-logistics",
          title: "Logistics",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/logistics/";
          },
        },{id: "nav-lectures",
          title: "Lectures",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lectures/";
          },
        },{id: "nav-instructors",
          title: "Instructors",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/instructors/";
          },
        },{id: "nav-calendar",
          title: "Calendar",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/calendar/";
          },
        },{
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
