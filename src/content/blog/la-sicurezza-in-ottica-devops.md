---
title: "La sicurezza in ottica DevOps"
date: "2025-03-09"
slug: "la-sicurezza-in-ottica-devops"
categories: [37, 38]
---

In questo episodio parliamo della sicurezza in ottica DevOps.

Come si affronta la la sicurezza nell'ambito della velocità e delle tecniche e pratiche di DevOps? Abel Wang ce ne da una prima interpretazione in questo [video](https://www.youtube.com/watch?v=pPs6O4bpe3A).

I team più mauturi integrano, nei loro processi CI/CD, pratiche di information security. Gli engineer infosec sono coinvolti in ogni fase di produzione del valore dando il loro feedback e contributo - dal design alle demo all'inserimento nelle suite di test di test automatizzati in ottica security. Questo, tuttavia, deve essere fatto in modo da non rallentare il processo di sviluppo, integrando le pratiche di sicurezza nella quotidianità.

## La triade C.I.D.

Quando si parla di sicurezza nell'ambito informatico si fa riferimento a tre caratteristiche:

- Confidenzialità: protezione dei dati e delle informazioni scambiate tra un mittente e uno o più destinatari nei confronti delle terze parti.
- Integrità: impedire che i dati vengano modificati in modo non autorizzato o indesiderato.
- Disponibilità: capacità di garantire che le informazioni siano accessibili e utilizzabili da un utente autorizzato.

## 100:10:1

- 100 developer
- 10 operation
- 1 security

Questo sono le proporzioni della numerosità di figure professionali con queste specializzazioni.

Ecco perché cambiare approccio e adottare un mindset "DevSecOps" e investire in automazione è diventato necessario. 1 solo security engineer non può "controllare" alla vecchia maniera l'operato di 10 operation e 100 developer.

I team che iniettano nella quotidianità un approccio strutturato alla sicurezza sono più efficaci nella applicazione di continuous delivery. Un elemento chiave è assicurarsi che i team di sicurezza informatica rendano disponibile un elenco pre-approvato e facile da consultare di librerie, pacchetti, strumenti e processi disponibili per developer e operations da usare nel loro lavoro. Quando gli strumenti pre-approvati rendono la vita più facile agli engineer che li usano, verranno adoperati spontaneamente. Per ottenere questo bisogna concentrarsi sull'effettiva usabilità dei tool scelti internamente da dev e ops, allo stesso modo in cui un team si conentra su propri utenti finali del loro prodotto o servizio. In questo caso i "clienti" sono gli engineer.

## Rugged manifesto

Nel corso degli anni sono stati proposti dei nomi per estendere il concetto di DevOps per includere le tematiche di infosec quali DevSecOps, per esempio. Un altro è rugged DevOps. Rugged DevOps è la combinazione di DevOps col Rugged Manifesto


- I am rugged and, more importantly, my code is rugged.
- I recognize that software has become a foundation of our modern world.
- I recognize the awesome responsibility that comes with this foundational role.
- I recognize that my code will be used in ways I cannot anticipate, in ways it was not designed, and for longer than it was ever intended.
- I recognize that my code will be attacked by talented and persistent adversaries who threaten our physical, economic, and national security.
- I recognize these things - and I choose to be rugged.
- I am rugged because I refuse to be a source of vulnerability or weakness.
- I am rugged because I assure my code will support its mission.
- I am rugged because my code can face these challenges and persist in spite of them.
- I am rugged, not because it is easy, but because it is necessary and I am up for the challenge.

## Shifting-left

Applicare il principio di shift-left significa spostare a sinistra, cioè anticipare una pratica che di solito è eseguita verso le fasi finali di un processo software. Questa mentalità può essere applicata anche alle tematiche di infosec, con appositi tool e processi. In questo modo si evitano lunghi e costosi audit o controlli a fine progetto o iterazione di sviluppo. Inoltre, questi controlli potrebbero essere anche troppo lenti per essere svolti a fine iterazioni, rendendoli di fatto impossibili da praticare in una realtà dove si continua a sviluppare in modo iterativo e incrementale come con le metodologie Agile.

Per applicare shift-left in questo ambito significa cominciare a considerare aspetti di sicurezza già nelle fasi di progettazione applicativa e architetturale; questo include condurre review del design orientate alla sicurezza coinvolgendo il team di infosec e utilizzare una lista di strumenti, librerie, pacchetti e processi già approvate dal team di infosec in modo automatizzato in processi CI/CD.
 
Automatizzando queste attività possiamo generare prove on-demand che dimestrano che i nostri controlli sono operativi e possono servire ad auditor o a chiunque altro voglia consultarli attraversando il processo di creazione del valore.
 
Alla fine, non solo avremmo migliorato l'approccio alla sicurezza ma anche creato processi che sono più facili da ispezionare per audit che supportano la compliance in casi dove sono presenti regolamentazioni legali o contrattuali. Per ottenere questo:

- La sicurezza deve essere parte del lavoro di ciascuno
- Si integrano controlli preventivi sulla sicurezza dei nostri repository (es.: Cred Scan)
- Si integrano le pratiche di sicurezza nelle pipeline CI/CD - i test relativi a tematiche di sicurezza devono essere integrati nell'automazione a fianco dei test "applicativi / - funzionali" ed essere eseguiti a ogni run dell'automazione.
- Si applica una corretta gestione dei segreti (stringhe di connessione, chiavi di crittazione, PAT token, ...)
- Si integra la sicurezza nelle pratiche di telemetria (ad esempio conteggio login fallite, richieste di password reset, ...)
- Protezione delle pipeline di deployment (esempio le pipeline non possono modificare ma solo leggere il codice).
- Ridurre la dipendenza e la separazione forte dei compiti.

Una miglior sicurezza, per un'azienda, significa essere più responsabili e protettivi nei confronti dei dati. Significa che si è più affidabili e con una maggiore continuità di servizio e in grado di ripristinare il servizio più rapidamente.

## Sicurezza applicativa

Di solito i team development si preoccupano di testare la correttezza delle funzionalità e dei flussi logici, concentradosi sugli "happy path" cioè quei percorsi dove è previsto che l'applicazione possa andare.

Dall'altra parte, gli esperti di QA o sicurezza e frodi si concentrano sui "sad path" cioè quei percorsi del codice dove le cose vanno storte o di gestione delle condizioni di errore.

Invece che effettuare questi test manualmente potremmop generare dei test automatizzati (unit o funzionali/integrazione) che possono essere eseguite nelle pipeline. Nei nostri test vorremmo:

- Analisi statica del codice (SAST): un tipo di test che scansiona il codice sorgente a riposo per scoprire errori di programmazione, mancate best-practice, codice potenzialmente - dannoso, obsoleto,...
- Analisi dinamica: suite di test che è eseguita quando il nostro programma è in esecuzione. Tipocamente ci si concentra su problemi di gestione della memoria, performance - generali del sistema e OWASP TOP 10 con OWASP ZAP (Zed Attack Proxy). Possono anche essere eseguite alcune tipologie di penetration test.
- Scan delle dipendenze. Sempre della famiglia di analisi statica del codice, questa analisi si concentra sulle dipendenze/librerie che il nostro codice utilizza stilandone un - inventario e confrontandolo con un database di versioni con problemi noti, problemi di licenze e così via.

## Azioni

### Esercizio 1 - Identifica le attuali pratiche orientate alla sicurezza

Esamina, da solo o in gruppo, le attuali pratiche orientate alla sicurezza nel tuo Application Lifecycle Management. Stai sfruttando funzionalità del linguaggio che usi o dell'IDE (es. SonarLint o le regole di Roslyn per .NET). Quali sono le domande che il team si pone durante la progettazione di nuove feature in termini di sicurezza? C'è un team di infosec e quanto e come è coinvolto? Che pratiche ci sono in pipeline?

### Esercizio 2 - Identifica la prima pratica orientata alla sicurezza che potresti implementare

Dopo aver analizzato la situazione attuale, quale ritieni possa essere il passo più rapido per implementare una pratica orientata alla sicurezza? Pianifica la sua implementazione in un orizzonte temporale breve (1 mese).

### Esercizio 3 - Spiega la triade a qualcuno

Spiega i concetti di confidenzialità, integrità e disponibilità del dato a qualcuno.
