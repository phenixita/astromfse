---
title: "Spaccare tutto con i test di carico"
date: "2025-08-08"
slug: "spaccare-tutto-con-i-test-di-carico"
categories: [37, 38, 23]
---

Oggi ho messo a dura prova delle API fresche di sviluppo con [k6](https://k6.io/).

Se non conosci k6 devi assolutametne andare a curiosare perché è uno strumento super developer friendly per scrivere dei test di carico.

## Si fa presto a dire stress test

Di solito quando si parla di mettere a dura prova un sistema si parla di stress test pensando a una tipologia di test che deve bombardare un sistema per farlo rompere e trovare l'anello debole della catena.

Invece ci sono svariate tipologie di test quali gli [spike test](https://grafana.com/docs/k6/latest/testing-guides/test-types/spike-testing/), gli [stress test](https://grafana.com/docs/k6/latest/testing-guides/test-types/stress-testing/) o i [soak test](https://grafana.com/docs/k6/latest/testing-guides/test-types/soak-testing/) (l'ho imparato dalla documentazione di k6 un po' di tempo fa.)

## Dicevo che ho spaccato delle API

Nello specifico ho eseguito uno spike test, cioè ho creato un picco intensissimo di carico con centinaia di utenti virtuali simulati.
L'ho fatto perché in realtà mi serviva popolare il database con tanti dati per poi fare altre prove "pesanti" e mi sono detto... perché no? Così per 30 secondi ho bombardato un porvero Pod in un cluster k8s che dopo pochi secondi ha cominciato a tirare errori 500 da tutte le parti :D

## Considerazioni e AI

Per fare lo scaffolding dei test mi sono affidato al buon Copilot con Sonnet 4... l'ho messo in modalità agent, gli ho dato la dritta di leggere bene il file di openapi specification e di costruirmi dei test per le API specifiche di cui avevo bisogno.

Nel giro di un 5-10 minuti avevo gli script pronti che con minime modifiche da parte mia hanno fatto quello che serviva.

k6 si è rivelato ancora una volta utile sia per generare dati di test che proprio per stressare il sistema e scoprire cose.

Mica male!
