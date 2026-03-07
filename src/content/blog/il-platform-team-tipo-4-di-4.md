---
title: "Il platform team (tipo 4 di 4)"
date: "2025-06-03"
permalink: "il-platform-team-tipo-4-di-4"
categories: [38, 43]
---

Nell'episodio precedente sulle tipologie di team abbiamo parlato del team che gestisce i sistemi altamente specializzati.

Oggi vediamo l'ultima tipologia cioè il platform team.

## Platform team

Immagina di essere in un’azienda dove ogni team di sviluppo si arrangia come può: chi rilascia in produzione da Visual Studio, chi ha uno script shell che “funziona solo sul suo PC”, chi aggiorna a mano i certificati SSL ogni tre mesi “perché l’ha sempre fatto lui”. A un certo punto, arriva il platform team.

Nel giro di qualche mese, mettono in piedi una piattaforma interna: apri un nuovo progetto e ti arriva un template già pronto con logging, monitoring, CI/CD e tutto l’occorrente. C’è una dashboard dove vedi in tempo reale se il tuo microservizio è su, se consuma troppo, se c'è un problema di sicurezza o un parametro mal configurato.

Ogni developer può creare un nuovo ambiente di test con un click, grazie a script già pronti e documentati. Hai bisogno di log? C’è una libreria già integrata con il tuo stack. Vuoi capire quanto costano i tuoi container? C’è un plugin che te lo dice in IDE. Il bello? Non ti costringono a usare niente: ti viene voglia di usarli, perché ti fanno risparmiare tempo e mal di testa.

La missione di un platform team è quella di rendere i team stream-aligned i più autonomi possibile in termini di utilizzo e configurazione di servizi interni o infrastrutturali con una mentalità di prodotto. Cosa significa? Secondo Microsoft (https://learn.microsoft.com/en-us/platform-engineering/adoption) adottare le pratiche di platform engineering significa passare da un uso informale e incoerente delle piattaforme e delle capacità condivise a modalità più coordinate, standardizzate e partecipative a livello organizzativo.

Queste piattaforme includono strumenti che:

- Aiutano gli sviluppatori a essere autonomi (ad esempio, starter kit, plugin per IDE);
- Supportano l'esecuzione di attività comuni;
- Racchiudono schemi e pratiche ricorrenti in blocchi riutilizzabili;
- Forniscono consigli e feedback precoci su problemi o rischi di sicurezza;
- Semplificano le operazioni gestendo l'infrastruttura sottostante e gli strumenti.

In pratica, un platform team è dedicato a fornire un insieme (più o meno ampio) di servizi ai team stream-aligned che riguardano tematiche di infrastruttura, networking o altre tematiche trasversali (logging, monitoraggio, sistemi di configurazione…).

I platform team collaborano attivamente con i team stream-aligned per comprendere le loro necessità e metterle a fattor comune con un mindset di prodotto: l'obiettivo è che la tua piattaforma di sviluppo interna offra un valore tale da diffondersi spontaneamente all'interno dell'azienda. I team che si occupano di platform engineering devono considerarsi come product owner della piattaforma interna per gli sviluppatori, e vedere gli sviluppatori stessi come clienti finali.
Adottare queste quattro topologie di team è una scelta pratica che può cambiare radicalmente come i tuoi team lavorano ogni giorno. Eppure, anche quando scegli la struttura giusta, oggi devi affrontare un’ulteriore sfida: i team lavorano sempre più spesso in remoto.

Se già mettere insieme squadre efficaci può essere difficile quando si lavora tutti nello stesso ufficio, come te la cavi quando le persone si trovano sparse per il mondo, magari anche in fusi orari diversi?
