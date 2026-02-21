---
layout: page
title: Bridge Criticality in a Spatial Road Network
description: Ongoing research with Prof. Filippo Radicchi at Indiana University
importance: 1
category: research

---



**Aarathi Parameswaran¹, Filippo Radicchi¹**

¹ Center for Complex Networks and Systems Research, Luddy School of Informatics, Computing and Engineering, Indiana University, Bloomington, IN, USA.

---

Transportation network vulnerability has become increasingly important given the critical role infrastructure plays in national mobility and economic resilience and remains an important problem to understand how these systems can withstand and recover from failures and disruptions. While extensive research has examined the robustness of road networks through various frameworks, the critical role bridges play in road networks and the risks posed by bridge infrastructure to transportation network connectivity is understudied. As structural bottlenecks in highway systems, bridge failures can disproportionately impact network connectivity, making their assessment vital for transportation planning and risk management.

Here, using National Bridge Inventory data from the Long Term Bridge Performance project of the Federal Highway Administration of the US, we study the National Highway System and develop a percolation analysis framework to study the impact of removal of bridges on the network. Different removal scenarios are compared, and we describe a combined risk score accounting for increases in distance from detours caused by removal of bridges, which can be used to identify critical bridges based on their position in their network as well as features of their infrastructure such as condition and age.

Accounting for bridge feature conditions and daily traffic volume highlights the bridges that are critical in disconnecting the network and delays in travel time caused by their disruption can be identified. The figure shows the case for a single county in the state of Iowa, where a small subset of bridges removed lead to non-trivial delays and disconnection of the network. This framework when extended to the entire system can be used to provide actionable insights for infrastructure resilience and planning in the event of disruptions caused by systemic failures or natural disasters.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/reachability_map_combined_risk_page-0001.jpg" class="img-fluid rounded z-depth-1" caption="Reachability map showing combined risk assessment for bridges in Iowa county" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/network_fragmentation_page-0001.jpg" class="img-fluid rounded z-depth-1" caption="Network fragmentation analysis showing the impact of bridge removal on connectivity" %}
    </div>
</div>

---

## References

1. Zeng, Guanwen, et al. “Switch Between Critical Percolation Modes in City Traffic Dynamics.” *Proceedings of the National Academy of Sciences*, vol. 116, no. 1, 2019.  

2. Hamedmoghadam, Homayoun, et al. “Percolation of Heterogeneous Flows Uncovers the Bottlenecks of Infrastructure Networks.” *Nature Communications*, vol. 12, no. 1, 2021.  

3. Xiao, Q., et al. “Quantitative Analysis of the Importance and Correlation of Urban Bridges and Roads in the Study of Road Network Vulnerability.” *ABEN*, vol. 4, 18, 2023.  

4. Kheirkhahan, N., Bellantuono, L., Amoroso, N., Cilli, R., De Biase, L., et al. “Data-Driven Assessment of Apulian Road Network Resilience: Bridge Unavailability and Inner Municipality Isolation Impact.” *PLOS ONE*, vol. 20, no. 10, e0333308, 2025. 