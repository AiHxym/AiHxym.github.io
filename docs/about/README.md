---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpeg
head: 'Yumeng Xue'
info: 'Ph.D. Candidate at University of Konstanz'
interests: 'Interests: Visualization, Visual Analytics, Human-Computer Interaction, and AI-Assisted Interactive Systems.'
socials:
- title: github
  link: https://github.com/AiHxym
- title: scholar
  link: 'https://scholar.google.com/citations?user=H_il-eoAAAAJ&hl=en'
- title: email
  link: 'mailto:yumeng.xue@uni-konstanz.de'
actions:
- text: Projects
  link: /projects/
- text: Blog
  link: /blog/
- text: CV
  link: /documents/CV.pdf
footer: Made with ♥ by Fing. Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

I am a final-year Ph.D. candidate in the [Visual Computing Group](https://www.cgmi.uni-konstanz.de/) at the University of Konstanz, supervised by [Prof. Dr. Oliver Deussen](https://www.cgmi.uni-konstanz.de/en/persons/prof-dr-oliver-deussen/). My research focuses on visualizing large line ensembles and high-dimensional data, and on the interactive systems that make such data explorable. In 2026 I visited the [VIDI Lab](https://vidi.cs.ucdavis.edu/) at UC Davis, hosted by [Prof. Kwan-Liu Ma](https://www.cs.ucdavis.edu/~ma/). :bar_chart:

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>
