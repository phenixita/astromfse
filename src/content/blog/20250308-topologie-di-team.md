---
title: "Le topolgie di team per produrre software che nessuno ti spiega"
date: "2025-03-08"
permalink: "topologie-di-team"
categories: ['devops', 'daily']
---

In questo episodio parliamo di come si possono strutturare i team in modo da ottimizzare le comunicazioni, le sinergie e i risultati per il cliente finale.

## Rispondo alle tue e-mail

Prima di proseguire...

Nessuno ci fa mai caso ma puoi rispondere a questo messaggio e io lo leggerò! Fammi sapere cosa ne pensi!

Continuiamo!

## Introduzione

Chi lavora nel mondo della tecnologia è costantemente in azione: sviluppo di nuove feature e aggiornamento di sistemi a una velocità incredibile con una quantità di tecnologie e piattaforme coinvolte sempre crescente. Applicazioni mobile, web, dispositivi IoT, wearable device devono interagire tra di loro in modo efficace per raggiungere gli obiettivi di business.

La tecnologia impatta gli aspetti della quotidianità di tutti: dal prenotare un taxi, al ricevere lo stipendio ogni mese, fino a dispositivi medici che salvano vite a persone.

Costruire ed erogare servizi altamente complessi e interconnessi è un'attività di team (combinati) che richiede l'impegno di svariate persone con competenze differenti. Inoltre, le moderne aziende IT devono operare rapidamente, in modo sicuro mentre crescono si adattano a un mercato in continua evoluzione.

Ecco perché le interazioni tra le persone sono al centro di un business che abbraccia in profondità le tematiche di cultura DevOps.

## La legge di Conway

La legge di Conway è attribuita a Melvin E. Conway da un suo paper (How Do Committees Invent?) per spiegare la relazione tra l'organizzazione aziendale e il design dei sistemi dell'orgazzione stessa:

_Le organizzazioni che progettano sistemi [...] sono indotte a generare design che sono copie dei legami nelle organizzazioni stesse. - Melvin E. Conway_

Conway intendeva dire che c'è un forte legame tra le relazioni e i path di comunicazione aziendale e l'architettura dei sistemi (si riferiva principalmente a sistemi elettronici) che vengono progettati. Si può osservare anche che i percorsi di comunicazione tracciano e rappresentano il flow di creazione del valore (tanto caro alla prima via di DevOps).

Se hai 4 team che lavorano a un compilatore, si avrà un compilatore progettato in 4 fasi. - Eric S. Raymond. "Conway's Law". The Jargon File, version 4.4.8

Dal 1968 è diventato sempre più chiaro come la legge di Conway si applichi al mondo del software: le aziende sono vincolate a produrre design di sistemi che derivano dai loro path di comunicazione.

Conoscere la legge di Conway è importante per riuscire a implentare ai livelli massimi le pratiche DevOps.

La legge di Conway suggerisce che si possono ottenere notevoli miglioramenti progettando i sistemi software e i team che lavoreranno su di essi insieme dato che sono forze simili.

## La Reverse Conway Manoeuvre

Per manovra di Conway inversa si intende progettare uno o più team IT al fine di ottenere o agevolare una voluta architettura di un sistema software.

Questo è l'opposto di quanto accade in modo implicito: cioè le dinamiche aziendali governano più o meno direttamente la progettazione di un software.

Sfruttando questa dinamica in modo rovesciato si giunge a un'ottimizzazione del flow perché le dinamiche di team si allineano alle pratiche architetturali.

## I team come mezzo di produzione e consegna

Progettare un team introduce un approccio orientato alle persone nella progettazione e costruzione del software per raggiungere una flessibilità strategica aziendale.

Impostare una topologia di team chiarisce lo scopo di un team e le responsabilità, aumentando l'efficacia e la qualità delle relazioni interne ed

esterne.

Ecco un esempio di architetture di team per veicolare specifiche architetture software.

![team topologia 1](https://micheleferracin.it/wp-content/uploads/2025/03/0a4bd96d32b8427680863afeda3a8968.png)

Se l'architettura voluta è di tipo "classico" con database condiviso l'approccio dell'immagine qui sopra con 2 team dev, 1 team DBA e 1 ops è adeguato.

Se volessimo adottare una architettura a microservizi l'approccio sarebbe molto difficile.

Invece, potremmo ristrutturare le persone in team come nell'immagine seguente:

![team topologia 2](https://micheleferracin.it/wp-content/uploads/2025/03/4616f7956f8349758bfabb4cb33cb302.png)

In questo modo l'architettura software desiderata si allinea con l'architettura di team.

Quando progettiamo i team aziendali ecco altre cose da tenere in considerazione:

- Richiedere o pensare che tutti possano comunicare con tutti è la ricetta per un disastro.
- Limitare i path comunicativi in relazioni di team ben definite e "loosely-coupled".
- Il team è da intendersi come l'unità più efficiente per la produzione e il rilascio di software e non i singoli individui.

## Topologie di team al servizio del flow

I team e le interazioni tra i team creano il valore tramite una sequenza di attività (definizione di flow stream). Ecco perché i team devono essere ottimizzati per essere al servizio del flow.

Per essere ottimizzati i team dovrebbero:

- Essere stabili e non cambiare continuamente o essere creati per progetti brevi.
- Adottare un mentalità "stream-aligned" cioè orientati al flusso di business di cui si occupano dalla progettazione al live in produzione.
- Avere responsabilità ben chiare per evitare zone di grigio e sovrapposizioni.
- Per ogni contesto è necessario valutare la topologia di team più adatta in base al contesto e alla maturità culturale e tecnica..

## Evoluzione delle interazioni tra team per l'innovare e consegnare software rapidamente

Una volta che i team sono stati strutturati è necessario stabilire come e quanto interagiscono tra di loro. Le aziende devono essere consapevoli che per raggiungere gli obiettivi di business, tecnologici, di mercato e delle persone deve esserci una evoluzione.

In molte realtà le iterazioni tra i team sono definite in modo implicito, senza particolari regole o limitazioni. Questo può essere causa di rallentamenti o inefficienze. Quando si considerano le relazioni tra i team è importante decidere con chi un team collabora per raggiungere un obiettivo o di quale altro team può servirsi "as a service". I team possono collaborare in tre modi:

- collaborazione: lavoro condiviso con un altro team
- x-as-a-service: utilizzare o fornire qualcosa con collaborazione minima
- facilitazione: aiutare (o essere aiutati) da un altro team per risolvere problemi.

Saper scegliere le modalità di collaborazione tra team valutandone pro e contro è cruciale per il successo di tutti i progetti di medio-lunga durata.

## Azioni

### Esercizio 1 - La tua architettura software corrisponde alla realtà aziendale?

Identifica la tua struttura aziendale e verifica quanto si applica la legge di Conway alla tua situazione.

### Esercizio 2 - Manovra di Conway inversa

Identifica, da solo o in gruppo, come poter applicare la manovra di Conway inversa per allineare l'architettura aziendale con quella software.

### Esercizio 3 - Mappatura

Identifica, da solo o in gruppo, una mappa dei team in cui lavori e le modalità di interazione tra essi (collaborazione, x-as-a-service, facilitazione).
