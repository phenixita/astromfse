---
title: "Compliance, librerie e codice generato"
date: "2025-10-31"
permalink: "compliance-librerie-e-codice-generato"
categories: ['devops', 'daily']
---

Qualche giorno fa stavo parlando con Luigi di librerie "famose" nel mondo .NET che sono diventate o che stanno diventando a pagamento.

Parliamo di casi come AutoMapper, MediatR, FluentAssertions e così via.

In questi casi, come comportarsi? Ci sono vari scenari.

- Fermarsi alla versione che resta free: semplice, veloce, non si violano copyright ma sul lungo termine potrebbe esporci a problemi di sicurezza che non vengono sistemati-
- Usare uno dei fork che si vengono a creare: veloce, non si viola copyright ma non ci sarà nessuno che li mantiene. Quindi vedi sopra.
- Farsi un fork proprio: poi hai tempo/voglia di mantenere qualcosa che fino poco tempo prima usavi come cliente e basta? Bah. Quindi perché non pagare a questo punto?
- Pagare e continuare a usare la libreria: scenario tecnicamente più valido e probabilmente anche a livello di business. Certo, potrebbe rappresentare una spesa imprevista anche magari impattante.

## I problemi con l'AI

I modelli di AI sono addestrati su un corpus di sorgenti che fa ampio uso di queste librerie che appunto sono famose. E qui sta il punto di attenzione. Quando faccio generare una soluzione (magari uno scaffolding da zero) all'agente di turno potrebbe cominciare ad usare librerie che sono diventate a pagamento. Farmi esempi di codice basate su quelle e che nel mio contesto aziendale non posso usare.

Questo apre anche le porte a ulteriori considerazioni: l'AI non può sapere eventuali compliance aziendali, librerie approvate eccetera eccetera.

E proprio perché queste librerie sono famose vanno magari a rappresentare un bias pesante nelle risposte che un modello ci può dare (forse, non ho dati alla mano, ipotesi mia).

Ne deriva di conseguenza che, ancora una volta, l'AI non ci sostituirà a breve. Siamo qui per restare.
