---
title: "Il team stream-aligned (tipo 1 di 4)"
date: "2025-05-30"
slug: "il-team-stream-aligned-(tipo-1-di-4)"
categories: [38, 43]
---

Lo stream aligned team: questa è la topologia di team primaria su cui le altre si basano ed è il principale produttore di valore per la software factory.

Lo stream aligned team è un’astrazione di quelli che più comunemente hai sentito indicati come team di feature o di prodotto.

Con questo termine si mette l’accento sul fatto che il team è allineato a un singolo flusso di lavoro: potrebbe essere un singolo prodotto, servizio, un insieme coerente di feature. Il team di questo tipo è completamente autonomo nello svolgimento del lavoro senza necessità di passaggi di consegna con altri e include competenze quali:

- Sicurezza
- Analisi commerciale
- Design/architettura
- Development
- Infrastruttura
- Monitoraggio
- Product management
- Testing
- User experience

Se ti sembra un team coi superpoteri… beh, lo è!

Un team di questo tipo è estremamente agile e reattivo nell’implementare le richieste dei clienti, del business e reagire alle novità perché completamente padrone del suo dominio senza dipendenze terze: è un’unità produttiva atomica autosufficiente. Quando le dimensioni aziendali aumentano e si comincia ad avere molte di queste unità, per farle lavorare al meglio si inseriscono tutte le altre topologie di team che, in fin dei conti, sono al servizio dei team stream-aligned per aumentarne l’efficienza.

Già nel 2002 Amazon aveva cominciato con queste strutture (tra cui il famoso two-pizza team). Ben consapevole della legge di Conway, Jeff Bezos si assicurò tramite un mandato (https://gist.github.com/chitchcock/1281611) che ogni servizio o applicazione sviluppata in Amazon fosse davvero indipendente. Il famoso mandato recita:

- Tutti i team esporranno d’ora in poi i propri dati e funzionalità tramite interfacce di servizio (API)-
- Le squadre devono comunicare tra loro attraverso queste interfacce.
- Non sarà consentita alcuna altra forma di comunicazione tra processi: niente link diretti, niente letture dirette dell’archivio dati di un’altra squadra, nessun modello a memoria condivisa, nessuna back-door. L’unica comunicazione consentita è tramite - amate alle interfacce di servizio sulla rete.
- Non importa quale tecnologia usino. HTTP, Corba, Pubsub, protocolli personalizzati – non importa. Bezos non ne ha a che fare.
- Tutte le interfacce di servizio, senza eccezioni, devono essere progettate fin dall’inizio per poter essere esternalizzate. In altre parole, il team deve pianificare e progettare per poter esporre l’interfaccia agli sviluppatori esterni. Nessuna - ezione.
- Chiunque non lo faccia verrà licenziato.
- Grazie; buona giornata!

Con questo editto diede il via una serie di sfide ed esperimenti che, in Amazon, portarono al design di architetture software che oggi chiamiamo microservizi. Eh, sì… non pensavi fosse un concetto così “vecchio” immagino! Anche se sono diventati più popolari nell’ultimo decennio, l’origine di quest’architettura è ben più lontana.

## Concludendo

La missione di un team di tipo stream-aligned è quella di assicurare uno scorrimento del lavoro fluido per un certo stream di attività collegate da un dominio di business in cui è autonomo e tende ad elevati standard di qualità e di prevedibilità.

Al prossimo messaggio per l'enabling team.
