---
pageClass: home-page
# some data for the components

name: Yumeng Xue
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/AiHxym
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com

cv: /documents/CV.pdf
bio: Ph.D. Student
email: yumeng[dot]xue[at]uni-konstanz[dot]de
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

Yumeng Xue is a 2nd-year Ph.D. student in [Visual Computing Group](https://www.cgmi.uni-konstanz.de/), Department of Computer and Information Science, University of Konstanz. His supervisor is [Prof. Dr. Oliver Deussen](https://www.cgmi.uni-konstanz.de/en/persons/prof-dr-oliver-deussen/). He received his B.S. degree from [Taishan College](https://www.tsxt.sdu.edu.cn/), Shandong University in 2020, and M.Sc. degree from University of Konstanz in 2022. His research interests fall in the field of Visualization, Human-Computer Interaction and Computer Graphics.

## News
- __[July 2023]__ One paper was accepted by IEEE VIS 2023.
- __[March 2023]__ One paper was accepted by EuroVis 2023.
- __[April 2022]__ Completed master's degree and started working on PhD.
- __[April 2021]__ Started working on master's degree.
- __[August 2020]__ Our work has received Honorable Mention in VAST Challenge 2020.
- __[August 2020]__ One paper was accepted by IEEE InfoVis 2020. 

## Publications

- *Reducing Ambiguity in Line-based Density Plots by Image-space Colorization*<br>
**Yumeng Xue**, Patrick Paetzold, Rebecca Kehlbeck, Bin Chen, Kin Chung Kwan, Yunhai Wang, and Oliver Deussen<br>
**IEEE Transactions on Visualization and Computer Graphics (Proc. VIS 2023)**, to appear. [[Paper]](https://arxiv.org/pdf/2307.10447.pdf) [[Suppl]](https://osf.io/jm5yz/) [[Page]](/projects/pubs/reducing)

- *RectEuler: Visualizing Intersecting Sets using Rectangles*<br>
Patrick Paetzold, Rebecca Kehlbeck, Hendrik Strobelt, **Yumeng Xue**, Sabine Storandt, and Oliver Deussen<br>
**Computer Graphics Forum (Proc. EuroVis 2023)**, 2023. [[Paper]](https://kops.uni-konstanz.de/server/api/core/bitstreams/29ae5fc6-ebd7-4f09-8c7f-6d75b19ada4a/content)

- *Implicit Multidimensional Projection of Local Subspaces*<br>
Rongzheng Bian, **Yumeng Xue**, Liang Zhou, Jian Zhang, Baoquan Chen, Daniel Weiskopf, and Yunhai Wang<br>
**IEEE Transactions on Visualization and Computer Graphics (Proc. InfoVis 2020)**, 2021. [[Paper]](https://arxiv.org/pdf/2009.03259.pdf)

- *CA2: Cyber Attacks Analytics*<br>
Luyu Cheng*, Bairui Su*, **Yumeng Xue***, Xiaoyu Liu, and Yunhai Wang<br>
**VAST Challenge Workshop, VIS 2020**, 2020. [[Paper]](/papers/CA2__Cyber_Attacks_Analytics.pdf) [[Solution]](https://visualdata.wustl.edu/varepository/VAST%20Challenge%202020/challenges/Mini-Challenge%201/entries/Shandong%20University/) [[Demo]](https://vast-2020.vercel.app/#/)<br>
*: equal contributation

## Awards

- 2020, Mini-Challenge 1 Honorable Mention: Streamlined Analysis Process, VAST Challenge, IEEE VIS 2020
- 2020, Honor of China Top-Notch Undergraduate Training Program
- 2019, Outstanding Academic Scholarship, Shandong University

## Services

- Reviewer for IEEE VIS Conference 2023
- Reviewer for Computational Visual Media (CVM) Conference 2021

## Teaching

- 2020 Fall, Teaching Assistant, Visualization (for undergraduate students in Shandong Uiversity)
- 2019 Fall, Teaching Assistant, Computer Graphics (for undergraduate students in Shandong Uiversity)

## Education

- __University of Konstanz__, Ph.D. student in Computer Science, April 2022 - Now
- __University of Konstanz__, M.Sc. in Computer Science with distinction, April 2021 - March 2022
- __Shandong University__, B.Eng. in Computer Science, September 2016 - June 2020

## Experiences

- __Research Assistant__, University of Konstanz, October 2021 - March 2022
- __Research Assistant__, Shandong University, July 2019 - July 2021
- __Summer Intern__, National University of Singapore, July 2018 - August 2018





<!-- ## Projects


[→ Full list](/projects/)

<ProjectCard image="/projects/1.png" hideBorder=true>

  **The Making of Harry Potter's Wand**

  Harry P., Hermione G., *et al*
  
  Harry's wand was broken in 1997, but was repaired by him after the 1998 Battle of Hogwarts. Usually the repair of a wand is impossible, but with the use of the Elder Wand it was achievable.
  
  [[PDF](https://www.google.com)] [[arXiv](https://arxiv.org)]

</ProjectCard>

<ProjectCard hideBorder=true>

  **Harry Potter and the Deathly Hallows**
  
  In the epilogue of Deathly Hallows, which is set 19 years after Voldemort's death, Harry and Ginny are a couple and have three children: James Sirius Potter, who has already been at Hogwarts for at least one year, Albus Severus Potter, who is starting his first year there, and Lily Luna Potter, who is two years away from her first year at the school.

  [[Link](https://www.google.com)]

</ProjectCard> -->

<br><br><br><br><br>
<center ><script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=aLaUuMErFy70_G1Y9cF3-HZRzQ98jeCtLTKuu2fZPzs&cl=ffffff&w=250"></script></center>

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
