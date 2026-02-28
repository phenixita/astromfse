---
title: "Come collegare Azure Boards e GitHub"
date: "2025-10-28"
slug: "come-collegare-azure-boards-e-github"
categories: [37, 38, 28]
---

## Come collegare Azure DevOps Board con GitHub (senza perdere le feature migliori)

Negli ultimi mesi sempre più team stanno valutando la migrazione da **Azure DevOps** a **GitHub**, spinti dalle nuove funzionalità di intelligenza artificiale integrate con **Copilot**.
La verità è che Microsoft sta puntando moltissimo su GitHub come piattaforma “AI-first”, e il ritmo con cui arrivano le nuove integrazioni è impressionante.
Ma Azure DevOps ha ancora un punto di forza enorme: **le Board** (e le Pipeline)
Sono mature, flessibili, capaci di gestire processi complessi e scenari enterprise con una granularità che GitHub Projects ancora non raggiunge.

Allora perché scegliere?
Possiamo **unire i due mondi** e farli lavorare insieme.

## Il vantaggio dell’integrazione

Connettere **Azure DevOps Board** a **GitHub** permette di:

* continuare a gestire i **work item** e la pianificazione del lavoro in DevOps;
* mantenere i **repository** su GitHub;
* avere la **feature parity** sui collegamenti con commit, branch e pull request, esattamente come accade quando il codice è su Azure DevOps.

In pratica, è la soluzione ideale per chi vuole restare operativo durante una migrazione graduale verso GitHub, o semplicemente sfruttare il meglio di entrambi gli ecosistemi.

## Configurazione passo per passo

- **Apri Azure DevOps** e vai nella tua *organization*.
- Entra nel progetto che vuoi collegare a GitHub. La configurazione è a livello di progetto, non di organizzazione.
- In basso a sinistra clicca sull’**ingranaggio** delle impostazioni.
- Trova la sezione **GitHub Connection**.
- Clicca su **Connect your GitHub account**.
- È il metodo consigliato per quasi tutti gli scenari.
- Dopo aver fatto login su GitHub, seleziona l’**organization** o il tuo **account personale**, e scegli uno o più repository da collegare.
- Fai **Save**.
- GitHub ti chiederà di **autorizzare l’app “Azure Boards”**.
- Puoi limitarla a singoli repository o darle accesso completo a tutti i repo (presenti e futuri). Io di solito concedo l’accesso completo: più pratico, meno manutenzione.
- Se la prima connessione dà errore (succede ancora, a volte), ripeti il collegamento: la seconda volta in genere va.
- Una volta completata, puoi creare un **branch su GitHub** direttamente da un work item su DevOps, aprire **pull request**, e vedere i **link automatici** tra i due ambienti.

## Esempio pratico

Crea un work item su Azure DevOps, poi dai sui tre puntini e scegli **New GitHub branch**.
Dagli un nome, scegli il repository collegato, e basalo su `main` (o il tuo branch principale).
Se la creazione non parte subito, cambia nome al branch e riprova — c’è ancora qualche bug minore, ma funziona.

Una volta creato il branch, puoi:

* modificare un file su GitHub (per esempio il `README`);
* fare commit e aprire una pull request;
* tornare su Azure DevOps e vedere il work item aggiornato con branch, commit e stato della PR.

Il ciclo è completo: **GitHub gestisce il codice**, **Azure DevOps gestisce il lavoro**.

## Video

https://www.youtube.com/watch?v=ihS_nQ1zELU

## Considerazioni finali

Questa integrazione non è solo un ponte tecnico: è un modo per fare **migrazione evolutiva**.
Si parte dalle board mature di Azure DevOps e si sposta progressivamente il codice su GitHub, sfruttando Copilot e tutte le nuove API AI che Microsoft sta rilasciando.

Se lavori in un’azienda che sta pensando di fare il salto, inizia così: integra prima, migra poi.
E, come sempre, testa tutto su un progetto pilota. La teoria è utile, ma il codice che gira è ancora più onesto.
