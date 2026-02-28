---
title: "Le 4 metriche d'oro di Google per la telemetria"
date: "2025-08-20"
slug: "le-4-metriche-d'oro-di-google-per-la-telemetria"
categories: [37, 38]
---

## La Telemetria e i Quattro Segnali d'Oro: Dove Iniziare nel Monitoraggio

La telemetria è parte integrante della filosofia DevOps e rientra a pieno titolo nella "seconda via", cioè il feedback. Rientra nel magico e grande mondo del monitoraggio, materia su cui sono scritti fiumi di articoli. Ma se stai partendo da zero e vuoi strutturare un sistema di monitoraggio... da dove partire in modo pragmatico? Che dati raccogliere?

Se proprio proprio non sai da dove partire consiglio il sito https://sre.google che è sicuramente materia di studio. Lì puoi trovare i GOLDEN SIGNAL. Cioè tra tutto quello che si può monitorare questi sono i segnali "d'oro" che Google suggerisce.

Ci sono quattro metriche fondamentali che dovreste assolutamente tenere d'occhio: **latenza, traffico, errori e saturazione**. Se poteste misurare solo quattro parametri del vostro sistema rivolto agli utenti, concentratevi su questi. È un po' come avere il cruscotto essenziale di un'auto: velocità, carburante, temperatura e pressione olio.

### Latenza

La latenza rappresenta il tempo necessario per elaborare una richiesta. Qui c'è una distinzione cruciale da fare: dovete separare la latenza delle richieste riuscite da quella delle richieste fallite.

Pensateci un attimo: un errore HTTP 500 causato dalla perdita di connessione al database può essere restituito istantaneamente, ma questo non significa che il vostro sistema funzioni bene! Se includeste questi errori veloci nel calcolo della latenza media, otterreste dei risultati completamente fuorvianti. È come misurare la velocità media di un viaggio includendo il tempo in cui siete stati fermi in autostrada per un guasto.

D'altra parte, un errore lento è persino peggiore di uno veloce: l'utente aspetta, si innervosisce, e poi riceve anche una risposta negativa. Quindi è fondamentale tracciare anche la latenza degli errori, non semplicemente filtrarli via.

### Traffico

Il traffico misura quanta richiesta state ricevendo dal mondo esterno. È la "pressione" sul vostro sistema, se vogliamo. La metrica specifica dipende dalla natura del servizio che gestite, e questo è un punto importante da capire.

Per un servizio web classico, parliamo di richieste HTTP al secondo.

Per un sistema di streaming audio, potreste concentrarvi sul tasso di I/O di rete o sulle sessioni concorrenti: immaginate una stazione radio che deve gestire migliaia di ascoltatori simultanei. Per un database chiave-valore, invece, transazioni e recuperi al secondo sono più significativi.

### Errori

Gli errori sono probabilmente la metrica più insidiosa da comprendere, perché nascondono una complessità che spesso sottovalutiamo.
ù
Non è semplicemente "funziona o non funziona" - esiste tutto uno spettro di sfumature che possono ingannare sia noi che i nostri utenti.

Iniziamo dagli errori espliciti: quelli che si dichiarano apertamente, come un classico HTTP 500. Qui la situazione è chiara: qualcosa è andato storto e il sistema lo comunica onestamente. È come quando il cameriere viene al tavolo e vi dice direttamente: "Mi dispiace, abbiamo finito quello che avete ordinato."

Poi ci sono gli errori impliciti, che sono molto più subdoli. Il sistema risponde con un HTTP 200 (tutto ok!), ma vi serve contenuti completamente sbagliati. È quel tipo di situazione in cui ordinate una margherita e vi arriva una marinara, ma il cameriere vi assicura che va tutto bene. Dal punto di vista tecnico, la transazione è "riuscita", ma l'esperienza utente è compromessa.

Infine abbiamo gli errori per policy, che sono spesso i più difficili da individuare perché richiedono una definizione chiara delle aspettative. Se avete promesso tempi di risposta sotto il secondo, qualsiasi richiesta che impieghi 1.2 secondi è tecnicamente un errore, anche se funzionalmente corretta. È come arrivare in ritardo a un appuntamento: non è che non ci siete andati, ma non avete rispettato l'impegno preso.

### Saturazione

La saturazione vi dice quanto è "pieno" il vostro servizio. È come misurare il livello dell'acqua in una pentola che sta per traboccare: l'analogia più calzante che ho trovato negli anni.

L'approccio intelligente è concentrarsi sulla risorsa più limitante: se il vostro sistema è vincolato dalla memoria, monitorate quella; se è l'I/O il collo di bottiglia, tenete d'occhio quello. Non serve guardare tutto se sapete già dove si romperà per primo.

**Elemento cruciale**: molti sistemi iniziano a degradare ben prima di raggiungere il 100% di utilizzo. È come un'autostrada che inizia a rallentare già al 70% della capacità teorica. Avere un target di utilizzo è essenziale - non aspettate di arrivare al limite per agire.

Nei sistemi complessi, potete integrare con misurazioni di carico più sofisticate: il vostro servizio può gestire il doppio del traffico attuale? Solo il 10% in più? O è già al limite e ogni richiesta extra lo mette in ginocchio?

Un trucco che funziona sempre: **l'aumento della latenza è spesso il primo campanello d'allarme della saturazione**. Misurando il 99° percentile dei tempi di risposta su finestre piccole (un minuto), ottenete un segnale precoce preziosissimo. È come accorgersi che la coda al supermercato si sta allungando prima che si formi l'ingorgo vero e proprio.

Non dimenticate le previsioni: "Il vostro database riempirà l'hard disk tra 4 ore" è il tipo di alert che può salvarvi la notte e la reputazione.

## Action

Nel tuo sistema quali di questi Golden Signal hai implementato in telemetria e monitoraggio? Quale ti ha salvato in momenti critici?

## Reference

[Google](https://sre.google/sre-book/monitoring-distributed-systems/#xref_monitoring_golden-signals)
