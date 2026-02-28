---
title: "Architettura di un cluster Kubernetes e come funziona"
date: "2025-03-15"
slug: "architettura-kubernetes-cos-e-e-come-funziona"
categories: [37, 38]
---

Kubernetes è un orchestratore di workload containeraizzati.

Eh?!

Ok ripartiamo.

Kubernetes è uno strumento che permette di gestire scenari complessi di applicazioni in formato container.

Significa che è in grado di:

- Comportarsi come schedulatore: cioè è in grado di eseguire container in un cluster. Fornisce una interfaccia (es.: kubectl) di amministrazione per tale scopo (e non solo). Uno scheduler, inoltre, cerca di ottimizzare le risorse a sua disposizione.
- Agire come cluster: cioè astrae i numerosi host fisici che eseguono i container in una sola entità.

## Azioni

Vuoi saperne di più? Ecco un bel [video di introduzione all'architettura di Kubernetes](https://www.youtube.com/watch?v=WdEBQt3bqBM)!
