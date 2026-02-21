---
layout: page
title: Prediction Markets as Complex Adaptive Systems
description: Final Paper for Advanced Seminar on Complex Systems that has resulted in an ongoing collaboration to use hyper neural networks and agent-based modelling to study behavior on prediction markets. 
importance: 2
category: research

---


**INFO709 Final Paper**  
Fall Semester 2025  
Aarathi Parameswaran  

---




# Prediction Markets

Prediction markets are platforms or institutional mechanisms in which participants buy and sell contracts tied to the outcomes of future events. These markets are designed to elicit and aggregate dispersed information from participants, thereby producing collective forecasts. Also referred to as information markets or idea futures [1], prediction markets operate by allowing traders to express beliefs through prices. Contracts typically pay a fixed amount if a specified outcome occurs. The market price of a contract is interpreted as the probability of the corresponding event, reflecting the aggregate belief of market participants. For example, if a contract paying 1 USD conditional on an event trades at 0.60 USD, the market-implied probability of that event is 60%. In this sense, prediction market prices function as market-aggregated probabilistic forecasts.

Although prediction markets have existed and been studied for several decades (like the Iowa Electronic Markets or IEM), their prominence has increased markedly over the past five years. The growth of online market infrastructures, digital communities, and social media has enabled the growth of large-scale platforms such as Polymarket, Kalshi, Manifold and PredictIt, renewing interest in prediction markets as forecasting tools [2]. These platforms frequently focus on highly salient and polarizing topics, including elections, geopolitical conflicts, sports, and cryptocurrency, thereby attracting substantial public attention [3]. During the 2024 U.S. election cycle, for instance, nearly USD 2.4 billion was wagered across online prediction markets between September 1 and Election Day [4].

Because these markets operate online, they generate rich, high-frequency data on how individuals perceive uncertain events. Empirical studies typically evaluate their performance by comparing market-implied probabilities with realized outcomes, measuring forecasting accuracy and efficiency. While earlier prediction markets were largely confined to controlled academic experiments, contemporary platforms increasingly shape public expectations, media narratives, and political discourse.

---

### How predictive are these markets?

Prediction markets have long been promoted as superior forecasting tools, often claimed to outperform traditional information aggregation methods such as polling. This is owing to their properties of information revelation, rewarding and punishing participants, an inherent weighting mechanism for the information provided, scalability and real-time operation [5]. Contemporary online platforms make particularly strong claims about their predictive power, frequently citing anecdotal evidence from the 2024 U.S. elections. During this period, market-implied probabilities on platforms such as Polymarket and Kalshi diverged substantially from polling estimates. Online prediction markets are also designed to maintain anonymity since they use blockchain technology, as opposed to other conventional forms [5]. In response, these platforms have increasingly framed themselves as “truth-telling” oracles that reveal underlying political realities more accurately than conventional polling methods.

> **From Polymarket's documentation [6]:**  
> *Polymarket is the world's largest prediction market, allowing you to stay informed and profit from your knowledge by betting on future events across various topics. Studies show prediction markets are often more accurate than pundits because they combine news, polls, and expert opinions into a single value that represents the market's view of an event's odds. Our markets reflect accurate, unbiased, and real-time probabilities for the events that matter most to you. Markets seek truth.*

As a result, prediction market prices are often treated as credible reflections of public expectations. However, this perception persists despite evidence of substantial volatility in market prices, at times driven by the actions of a small number of large traders. Such dynamics raise questions about whether observed prices reflect broadly aggregated beliefs or instead the influence of concentrated capital.

The purported truth-telling capacity of prediction markets is commonly justified through the logic of the “wisdom of crowds”, under the assumption that participants possess diverse information and are incentivized to act on it, market prices should efficiently aggregate dispersed knowledge. This leads to a central empirical question: when large financial stakes and heightened public attention are present, do prediction markets in fact aggregate political information accurately and efficiently?

Empirical evidence reveals substantial variation across these different online platforms. A recent study by Clinton and Huang [4] analyzed nearly 2,500 political prediction markets across four platforms during the final five weeks of the 2024 U.S. presidential campaign, finding that while 93% of PredictIt markets correctly predicted outcomes better than chance, accuracy fell to 78% on Kalshi and 67% on Polymarket. Even the supposedly most accurate markets showed little evidence of efficiency, as prices for identical contracts diverged across exchanges, daily price changes were weakly or negatively correlated, and arbitrage opportunities also persisted.

---

## Economic Models of Prediction Markets

Economic studies of prediction markets have primarily operated within the neoclassical framework, grounding analysis in rational expectations equilibrium and the Efficient Market Hypothesis. Wolfers and Zitzewitz's foundational survey [1] exemplifies this approach.

Grossman demonstrates equilibrium price aggregation under CARA utility and normally distributed signals [7]. Wolfers and Zitzewitz extend this result under logarithmic utility assumptions [1].

The Milgrom-Stokey no-trade theorem [8] and the Grossman-Stiglitz paradox [9] challenge the theoretical coherence of fully efficient markets.

---

## Prediction Markets as Complex Adaptive Systems

Prediction markets exhibit the defining properties of complex adaptive systems described by Holland and Miller [10].

Clinton and Huang document regime-dependent behavior inconsistent with equilibrium predictions [4].

---

## Mechanisms of Information Aggregation in Complex Adaptive Markets

### Bounded Rationality and Adaptive Ecologies

Arthur's inductive reasoning framework [11], building on Simon's bounded rationality [12], explains why trade persists despite the no-trade theorem [8].

Polymarket exhibited negative serial correlation in daily price changes, $\bar{\rho} = -0.324$ [4].

---

### Information Cascades and Path Dependence

Reynolds' BOID model [13] illustrates emergent coordination.

Arthur's increasing returns framework [14] explains potential lock-in.

Berg and Rietz document manipulation resistance through design constraints [15].

---

### Institutional Governance and Design Principles

Ostrom's design principles for governing commons [16] help explain institutional divergence.

| Ostrom Principle | IEM/PredictIt | Polymarket | Observed Effect |
|------------------|--------------|------------|----------------|
| 1. Clear boundaries | $500 cap (IEM), $850 + 5K traders [15] | Unlimited crypto stakes [4] | Whale dominance on Polymarket |
| 2. Congruent rules | Unit portfolio arbitrage [15] | Separate contracts | Persistent arbitrage |
| 4. Monitoring | Self-enforcing via arbitrage [15] | Minimal; arbitrage persists [4] | 95% of days show arbitrage |
| **Accuracy** | 93% (PredictIt) [4] | 67% (Polymarket) [4] | Governance shapes outcomes |

---

### Endogenous Preferences and Cultural Selection

Bowles demonstrates endogenous preference formation [17].

Niche construction theory explains co-evolutionary dynamics [18].

---

## Conclusion

Accuracy is not an inherent property of prediction market mechanisms, contrary to claims by platforms like Polymarket that "markets seek truth" [6], but an achieved outcome dependent on governance structures, returns regimes, network topology, and trader ecology.

---

## References

1. Wolfers, J., & Zitzewitz, E. (2006). *Prediction Markets*.  
2. Wingard (2025). Polymarket growth analysis.  
3. Froman (2025). Rise of online prediction platforms.  
4. Clinton, J., & Huang (2025). Political prediction markets in the 2024 U.S. election.  
5. Buckley (2024). Blockchain-based prediction markets.  
6. Polymarket (2024). What is Polymarket? Official documentation.  
7. Grossman, S. (1976). On the efficiency of competitive stock markets.  
8. Milgrom, P., & Stokey, N. (1982). Information, trade and common knowledge.  
9. Grossman, S., & Stiglitz, J. (1976). On the impossibility of informationally efficient markets.  
10. Holland, J., & Miller, J. (1991). Artificial adaptive agents in economic theory.  
11. Arthur, W. B. (1994). Inductive reasoning and bounded rationality.  
12. Simon, H. (1991). Bounded rationality and organizational learning.  
13. Reynolds, C. (1987). Flocks, herds, and schools: A distributed behavioral model.  
14. Arthur, W. B. (1989). Competing technologies and lock-in by historical events.  
15. Berg, J., & Rietz, T. (2014). Prediction markets as decision support systems.  
16. Ostrom, E. (2000). Collective action and the evolution of social norms.  
17. Bowles, S. (1998). Endogenous preferences.  
18. Odling-Smee, F. J., et al. (1996). Niche construction.