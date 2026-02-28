---
title: "Considerazioni su SpecKit parte 2"
date: "2025-11-07"
slug: "considerazioni-su-speckit-parte-2"
categories: [32, 40, 38]
---

[Nell'episodio precedente dedicato a SpecKit](https://micheleferracin.it/considerazioni-su-github-speckit-parte-1/) mi ero fermato alla parte di analisi / scrittura requisiti offerta dal toolkit stesso.

Ho avuto poi modo di proseguire e sperimentare con gli altri due comandi principali dedicati all'implementazione (riporto dalla documentazione):

- /speckit.tasks: generate actionable task lists for implementation
- /speckit.implement: execute all tasks to build the feature according to the plan

## Tasks

Il comando tasks si prefigge lo scopo di analizzare il file PRD.md e di creare un piano tattico di implementazione reale. Il suo output è quello di creare un file che descrive i task di implementazione passo passo (es.: crea un nuovo project dotnet, aggiungi il project alla solution, aggiungi questa libreria, crea questo migration script per il db...).

## Implement

Il comando implement ha lo scopo di realizzare quanto stabilito nei task, come fossimo noi a dare nel prompt uno dietro l'altro i vari compiti da svolgere.

## Il risultato

Dopo aver sbrodolato nella chat di Copilot per 15 minuti il risultato è stato... interessante.

Ammetto che ho sperimentato con un caso, credo, abbastanza... intenso, ma sennò che gusto c'è?

Dovevano essere create nuove tabelle in un db, create nuove API che esponevano funzionalità di un nuovo dominio applicativo. Tecnologie principali coinvolte: ASP Net Core, Mediatr, SQL Kata, PostgreSQL.

Potendo contare su una codebase con già altre cose simili implementate, il modello scelto (Claude Sonnet 4.5), si abbastanza avvicinato all'implementazione che avrei fatto io.

### I contro

Ha tralasciato cose (non ha ereditato da alcune interfacce che avrebbe dovuto, ha tralasciato dei pezzi relativi a Mediatr), ha scritto codice che ho reputato in più eccetera.

Ah, non sono riuscito a indirizzarlo bene per un flusso di test driven development.

### I pro

Tanto codice boilerplate mi è stato risparmiato. Certo, qualcosa dovrò integrare, correggere o sistemare. Ma tanta parte noiosa mi è stata risparmiata.

Ho quindi salvato energie che avrei usato per scrivere cose noiose per revisionare e rivedere, che è uno sforzo diverso.

Tutto sommato, non è poi così diverso che rivedere del codice fatto da uno junior.

Inoltre, sempre con le dovute revisioni e rimaneggiamenti, seguendo tutto il processo (dallo specify all'implement) viene prodotta della documentazione che può essere utile per essere messa in wiki, in work-item di Azure DevOps o simili e così via. Aspetto decisamente interessante visto queste attività sono spesso trattate come secondarie.

## Conclusione

Tutto sommato una buona esperienza, non è magia, ma secondo me vale la pena spenderci del tempo se fa al caso proprio.

Aggiungo che c'è una parziale sovrapposizione con la modalità /plan che è stata messa in Copilot di recente che è una modalità agentica che fa quello che fa SpecKit ma molto più leggera. Anche qui, da provare come alternativa più snella per stendere un piano di esecuzione che poi magari viene eseguito da una persona invece che da una AI direttamente.
