---
title: "Ho provato un LLM in locale per sviluppo"
date: "2025-09-29"
slug: "ho-provato-un-llm-in-locale-per-sviluppo"
categories: [40, 38]
---

E ho mollato dopo 1 ora.

Il mio setup è:

- GeForce RTX 3060 12 GB
- i7 12700 KF
- 32 GB RAM
- LM Studio

Ho provato vari modelli della famiglia Llama e Gemma nei ditorni dei 7-8B di parametri e ho incontrato rogne di ogni tipo:

- Se vuoi risposte in tempi decenti, finestra di conversazione sui 5000 token
- 5000 token per workflow di revisione testi o codice sono bazzecole
- Se cominci ad attacare dei tool (tipo Azure DevOps MCP Server) servono 21000+ token perché il system prompt viene arricchito di tutte le descrizioni dei tool.
- I modelli a volte non capiscono che devono chiamare i tool.
- Quando lo capiscono non riescono a capire bene come passare i parametri.
- Si può integrare solo in Visual Studio Code Insiders e non la versione stable.

## Conclusione

Mi viene da ridere a pensare che c'è chi dice che è in grado di usare modelli in casa con facilità. Ok per gioco o esperimento, ma per lavorare davvero, gente, serve TANTO ferro.

20 € di Copilot al mese? Sono un regalo!

Tu hai mai provato con LM Studio o simili per ospitare ed usare LLM in privato?
