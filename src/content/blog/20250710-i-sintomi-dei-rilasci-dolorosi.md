---
title: "I sintomi dei rilasci dolorosi"
date: "2025-07-10"
permalink: "i-sintomi-dei-rilasci-dolorosi"
categories: ['devops', 'daily']
---

I principali sintomi dei rilasci dolorosi sono facili da individuare.

Li possiamo suddividere in:

- Software non progettato per la release. Sì, devi progettare i software intendendo il momento della release come una feature. Per ogni feature sviluppata, il tuo team dovrebbe chiedersi cosa accadrà quando a riverà in produzione, come farla arrivare, che impatto avrà sui dati esistenti, di quali dati statici di inizializzazione si potrebbe avere bisogno e così via.
- La software factory non è dotata di un sistema per applicare cambi di configurazione e infrastruttura in modo automatizzato. Creare nuovi ambienti o cambiare la configurazione di quelli esistenti (cambiare u  valore DNS, un puntamento di una connection string, un feature flag…) sono attività che, svolte a mano, rappresentano un momento ad alto rischio e contribuiscono a creare stress e un modo rischioso di l vorare.
- Passaggi di consegna burocratici e molti dipartimenti coinvolti. In contesti aziendali ricchi di dipartimenti specializzati (infosec, sistemisti, developers, qa…) gli artefatti di release devono fare il p regrinaggio di tutti i dipartimenti aziendali per motivi spesso datati, magari derivanti da un retaggio di vecchie pratiche non più adeguate o rilevanti.
  cco perché dovresti:
- Progettare sistemi facili da rilasciare con le stesse modalità in molteplici ambienti.
- Creare ambienti in modo automatizzato e ripetibile (configurazioni incluse).
- Adeguare la cultura aziendale e i processi interni per ridurre attese e passaggi che non forniscono valore aggiunto.

## Azioni

Se oggi dovessimo rilasciare in produzione una nuova funzionalità critica, cosa si romperebbe, chi andrebbe in crisi e perché?
