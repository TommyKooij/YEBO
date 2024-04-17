const settings = {
  name: "yebo",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "YEBO",
      description: "Een betere toekomst door onderwijs",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Over Ons", "/over/"],
            ["Nieuws", "/category/nieuws/"],
            ["Contact", "/category/contact/"],
            ["Word Lid", "/category/word_lid/"],
            ["Doneer", "/category/doneer/"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://yebo520.wordpress.com/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
