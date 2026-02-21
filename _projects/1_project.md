---
layout: page
title: Prediction Markets as a Complex Adaptive System
description: Final Paper for Advanced Seminar on Complex Systems
importance: 1
category: work
related_publications: true
---


# Prediction Markets as Complex Adaptive Systems

**INFO709 Final Paper**  
Fall Semester 2025  
Aarathi Parameswaran  

---

## Prediction Markets

Prediction markets are platforms or institutional mechanisms in which participants buy and sell contracts tied to the outcomes of future events. These markets are designed to elicit and aggregate dispersed information from participants, thereby producing collective forecasts. Also referred to as information markets or idea futures[^1], prediction markets operate by allowing traders to express beliefs through prices.

Contracts typically pay a fixed amount if a specified outcome occurs. The market price of a contract is interpreted as the probability of the corresponding event, reflecting the aggregate belief of market participants. For example, if a contract paying 1 USD conditional on an event trades at 0.60 USD, the market-implied probability of that event is 60%. In this sense, prediction market prices function as market-aggregated probabilistic forecasts.

Although prediction markets have existed and been studied for several decades (such as the Iowa Electronic Markets), their prominence has increased markedly over the past five years. The growth of online infrastructures, digital communities, and social media has enabled large-scale platforms such as Polymarket, Kalshi, Manifold, and PredictIt[^2]. During the 2024 U.S. election cycle, nearly USD 2.4 billion was wagered across online prediction markets between September 1 and Election Day[^3].

Because these markets operate online, they generate rich, high-frequency data on how individuals perceive uncertain events. Contemporary platforms increasingly shape public expectations, media narratives, and political discourse.

---

## How Predictive Are These Markets?

Prediction markets are often promoted as superior forecasting tools, claimed to outperform traditional polling due to:

- Information revelation  
- Financial incentives  
- Implicit weighting of informed traders  
- Real-time updating  
- Scalability[^4]

Online platforms frequently frame themselves as “truth-telling” oracles.

> **From Polymarket's documentation:**  
> *Markets reflect accurate, unbiased, and real-time probabilities for the events that matter most. Markets seek truth.*[^5]

However, substantial volatility and concentrated capital raise questions about whether prices reflect broad information aggregation or the influence of a few large traders.

A recent study analyzing nearly 2,500 political prediction markets during the final five weeks of the 2024 U.S. presidential campaign found substantial variation across platforms[^3]:

- PredictIt: 93% accuracy  
- Kalshi: 78% accuracy  
- Polymarket: 67% accuracy  

Prices for identical contracts diverged across exchanges, daily price changes were weakly or negatively correlated, and arbitrage opportunities persisted. This variation suggests that accuracy depends on institutional and behavioral factors rather than mechanism design alone.

---

## Economic Models of Prediction Markets

Neoclassical economic theory models prediction markets under rational expectations and the Efficient Market Hypothesis.

Wolfers and Zitzewitz argue that prediction markets efficiently aggregate dispersed information, with prices reflecting collective beliefs[^1]. Under weak-form efficiency, public information should not allow systematic profits.

However, major theoretical tensions arise:

- **Milgrom–Stokey no-trade theorem:** Under common priors and rational expectations, no trade should occur[^6].
- **Grossman–Stiglitz paradox:** If prices are perfectly efficient, no one would gather costly information[^7].

Empirically, prediction markets often perform well but display persistent anomalies:

- Favorite–longshot bias  
- Bubbles in experimental settings  
- Cross-platform arbitrage  
- Serial correlation in price movements  

These inconsistencies motivate an alternative framework.

---

## Prediction Markets as Complex Adaptive Systems

Holland and Miller define complex adaptive systems as networks of interacting adaptive agents producing emergent aggregate behavior[^8].

Prediction markets meet these criteria:

1. Networked interacting agents  
2. Emergent price formation  
3. Adaptive strategy updating  
4. Profit/loss feedback  
5. Macrobehavior independent of micro-detail  

Clinton and Huang document regime-dependent behavior during the 2024 election cycle[^3]:

- Polymarket exhibited negative serial correlation ($\bar{\rho} = -0.324$).
- Arbitrage opportunities persisted on 95% of days.
- Prices sometimes moved without identifiable political events.

These findings suggest internal dynamics and feedback loops drive outcomes.

---

## Mechanisms in Complex Adaptive Markets

### 1. Bounded Rationality and Adaptive Ecologies

Arthur’s inductive reasoning framework proposes that traders use competing heuristics rather than computing rational expectations[^9]. Building on Simon’s bounded rationality[^10], agents rely on satisficing rules.

In Arthur’s El Farol model:

- Agents maintain multiple forecasting strategies.
- Successful strategies become overcrowded.
- Overcrowding reduces effectiveness.
- Agents shift strategies dynamically.

Prediction markets may operate as evolving ecologies of predictors rather than converging toward equilibrium.

Negative serial correlation on Polymarket is consistent with overcrowded momentum strategies followed by contrarian corrections[^3].

---

### 2. Information Cascades and Path Dependence

Reynolds’ BOID model demonstrates how complex collective behavior emerges from simple local interaction rules[^11].

In prediction markets:

- Alignment → Herding  
- Separation → Contrarian betting  
- Cohesion → Price convergence  

Arthur’s increasing returns theory explains how early advantages become self-reinforcing[^12]. Markets may lock into inaccurate forecasts through feedback loops.

Governance determines returns regimes:

- IEM and PredictIt impose caps, creating diminishing returns[^13].
- Polymarket’s unlimited crypto stakes create increasing returns and whale amplification[^3].

---

### 3. Institutional Governance

Ostrom’s principles for governing commons apply to prediction markets as information commons[^14].

| Principle | IEM / PredictIt | Polymarket | Outcome |
|------------|----------------|------------|----------|
| Clear boundaries | $500–$850 caps | Unlimited stakes | Whale dominance on Polymarket |
| Monitoring | Self-enforcing arbitrage | Weak enforcement | Persistent arbitrage |
| Accuracy | 93% | 67% | Governance shapes performance |

Governance structures influence whether markets aggregate information or amplify noise.

---

### 4. Endogenous Preferences and Cultural Selection

Bowles shows institutions shape preferences via socialization, framing, and learning[^15].

Platforms cultivate distinct trader ecologies:

- **Polymarket:** Speculation, visibility, momentum  
- **PredictIt:** Academic culture, smaller stakes, accuracy orientation  

Niche construction theory explains how platforms and traders co-evolve[^16].

---

## Regime Dynamics

Two possible regimes emerge:

### Information-Aggregating Regime
- Governance constraints  
- Predictor diversity  
- Accuracy-motivated traders  
- Strong monitoring  

### Noise-Amplifying Regime
- Whale dominance  
- Momentum amplification  
- Speculative culture  
- Weak monitoring  

Accuracy is not inherent to market design. It is contingent on governance and institutional structure.

---

## Conclusion

Prediction markets are not probability oracles. They are evolving complex adaptive systems shaped by:

- Institutional design  
- Returns regimes  
- Network topology  
- Cultural selection  
- Historical path dependence  

Early governance choices shape long-term trajectories. Accuracy depends on maintaining institutional conditions that promote information aggregation over self-reinforcing speculation.

---

## References

[^1]: Wolfers, J., & Zitzewitz, E. (2006). *Prediction Markets*.  
[^2]: Wingard (2025). Polymarket growth analysis.  
[^3]: Clinton, J., & Huang (2025). 2024 election prediction market study.  
[^4]: Buckley (2024). Blockchain and forecasting markets.  
[^5]: Polymarket documentation (2024).  
[^6]: Milgrom, P., & Stokey, N. (1982). No-trade theorem.  
[^7]: Grossman, S., & Stiglitz, J. (1976). Informational efficiency paradox.  
[^8]: Holland, J., & Miller, J. (1991). Complex adaptive systems.  
[^9]: Arthur, W. B. (1994). Inductive reasoning and bounded rationality.  
[^10]: Simon, H. (1991). Bounded rationality.  
[^11]: Reynolds, C. (1987). Flocks, herds, and schools.  
[^12]: Arthur, W. B. (1989). Competing technologies and lock-in.  
[^13]: Berg, J., & Rietz, T. (2014). Market design and manipulation resistance.  
[^14]: Ostrom, E. (2000). Governing the commons.  
[^15]: Bowles, S. (1998). Endogenous preferences.  
[^16]: Odling-Smee et al. (1996). Niche construction theory.  