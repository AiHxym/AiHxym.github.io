---
pageClass: projects-page
---

# Work

Here are some works of mine :books:

## Publications

<ProjectCard>

  **Structuring Line Ensembles with Path-Integrated Fidelity and Structural Inconsistency Fields**

  *IEEE Transactions on Visualization and Computer Graphics, to appear, 2027*

  When visualizing large-scale line ensembles, trajectory continuity and visual scalability are inherently antagonistic. Trajectory-centric methods preserve path information but rapidly degenerate into clutter as line density increases and mutual occlusion dominates. In contrast, field-based density representations enhance visibility while sacrificing structural coherence: density reflects accumulation rather than agreement, such that scalar aggregation alone cannot discriminate between consistent and conflicting configurations. Rather than replacing density-based views, we complement them with a path-integrated trajectory-fidelity measure that quantifies the agreement of each trajectory with a surrounding tensor field. By projecting this passage-centered structural support back into image space, we obtain what we call a Structural Inconsistency Field, which localizes regions where dense patterns correspond to coherent structure versus disagreement, outliers, or connectivity-induced ambiguity. Dynamic leave-one-out correction reduces self-bias in the path integral. Efficient fixed-grid updates combined with prefix-sum evaluation enable interactive analysis and iterative extraction of coherent structures. Synthetic benchmarks, scalability analyses, and real-world case studies demonstrate that, when paired with conventional density views, the proposed method disambiguates dense line patterns by exposing spatially localized coherence and structural breakdown that remain concealed in density-only representations.

  [[arXiv](https://arxiv.org/abs/2607.25121)]

</ProjectCard>

<ProjectCard>

  **Enhancing Line Density Plots with Outlier Control and Bin-based Illumination**

  *IEEE Transactions on Visualization and Computer Graphics, vol. 32, no. 6, pp. 4785-4795, 2026*

  Density plots effectively summarize large numbers of points, which would otherwise lead to severe overplotting in, for example, a scatter plot. However, when applied to line-based datasets, such as trajectories or time series, density plots alone are insufficient, as they disrupt path continuity, obscuring smooth trends and rare anomalies. We propose a bin-based illumination model that decouples structure from density to enhance flow and reveal sparse outliers while preserving the original colormap. We introduce a bin-based outlierness metric to rank trajectories. Guided by this ranking, we construct a structural normal map and apply locally-adaptive lighting in the luminance channel to highlight chosen patterns—from dominant trends to atypical paths—with acceptable color distortion. Our interactive method enables analysts to prioritize main trends, focus on outliers, or strike a balance between the two. We demonstrate our method on several real-world datasets, showing it reveals details missed by simpler alternatives, achieves significantly lower CIEDE2000 color distortion than standard shading, and supports interactive updates for up to 10,000 lines.

  [[Paper](https://doi.org/10.1109/TVCG.2026.3694447)] [[Suppl](https://osf.io/py5dz/files/46wct)] [[arXiv](https://arxiv.org/abs/2512.16017)]

</ProjectCard>

<ProjectCard>

  **Reducing Ambiguities in Line-based Density Plots by Image-space Colorization**

  *IEEE Transactions on Visualization and Computer Graphics (Proc. VIS 2023), vol. 30, no. 1, pp. 825-835, 2024*

  Line-based density plots are used to reduce visual clutter in line charts with a multitude of individual lines. However, these traditional density plots are often perceived ambiguously, which obstructs the user's identification of underlying trends in complex datasets. Thus, we propose a novel image space coloring method for line-based density plots that enhances their interpretability. Our method employs color not only to visually communicate data density but also to highlight similar regions in the plot, allowing users to identify and distinguish trends easily. We achieve this by performing hierarchical clustering based on the lines passing through each region and mapping the identified clusters to the hue circle using circular MDS. Additionally, we propose a heuristic approach to assign each line to the most probable cluster, enabling users to analyze density and individual lines. We motivate our method by conducting a small-scale user study, demonstrating the effectiveness of our method using synthetic and real-world datasets, and providing an interactive online tool for generating colored line-based density plots.

  [[Paper](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10297597)] [[Suppl](https://osf.io/jm5yz/)] [[Page](/projects/pubs/reducing)]

</ProjectCard>

<style lang="stylus">

.projects-page
  background-color #fafbfc

</style>
