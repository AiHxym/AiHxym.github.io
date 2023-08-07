module.exports = {
  title: "Yumeng's Homepage",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: true,
    nav: [
      { text: "Home", link: "/" },
      //{ text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      { text: "GitHub", link: "https://github.com/AiHxym" }
    ],
    sidebar: {
      '/blog/': genSidebarConfig('blog'),
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig(title) {
  if (title === 'blog') {
    return [
      {
        title,
        collapsable: false,
        children: [
          'covid-thinking',
          'Paris',
        ]
      }
    ]
  }
}

