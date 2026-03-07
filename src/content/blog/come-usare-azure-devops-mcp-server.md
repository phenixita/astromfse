---
title: "Come usare Azure DevOps MCP Server"
date: "2025-07-12"
permalink: "come-usare-azure-devops-mcp-server"
categories: ['devops', 'daily']
---

Immagina di aprire Visual Studio Code, digitare "mostrami l'ultimo work item che mi è stato assegnato nel project learning" e ottenere immediatamente la risposta. Non fantascienza: è quello che succede quando integri Azure DevOps con l'intelligenza artificiale attraverso il protocollo MCP.

## Il game changer che Microsoft ha rilasciato in silenzio

Da qualche mese Microsoft ha messo a disposizione gratuitamente e open source l'MCP Server per Azure DevOps. Una mossa che passa inosservata ai più, ma che rappresenta una svolta epocale per chi lavora quotidianamente con questi strumenti.

Il protocollo MCP (Model Context Protocol) è recentissimo - non ha nemmeno un anno di vita - ed è stato progettato specificamente per permettere ai modelli LLM di operare in modalità agentica, interfacciandosi con sistemi esterni in modo naturale e fluido.

## Cosa puoi fare concretamente

Le funzionalità disponibili sono impressionanti per ampiezza e profondità:

**Gestione work item**: Recuperi informazioni, esegui query complesse e aggiorni uno o più work item simultaneamente utilizzando il linguaggio naturale.

**Controllo repository**: Analizzi pull request, esamini branch, risolvi commenti e interagisci con il codice senza mai lasciare il tuo ambiente di sviluppo.

**Monitoraggio build e release**: Avvii pipeline, diagnosi errori e ottieni suggerimenti per la risoluzione dei problemi direttamente dalla conversazione con l'AI.

**Ricerca nella wiki aziendale**: Il vero asso nella manica. Un developer junior in fase di onboarding può interrogare la documentazione aziendale in linguaggio naturale, abbattendo le barriere di accesso alla conoscenza organizzativa.

## Setup in 5 minuti

La configurazione è sorprendentemente semplice:

1. Esegui `az login` con un account che ha accesso alla tua istanza Azure DevOps
2. Assicurati di avere Node.js e la Azure CLI installati
3. Crea un file `.vscode/mcp.json` nella cartella del progetto
4. Copia la configurazione dal repository GitHub ufficiale, sostituendo "your-org" con il nome della tua organizzazione
5. Salva e avvia il tool quando Visual Studio Code te lo propone

Un passaggio aggiuntivo, ma fortemente raccomandato: crea un file `copilot-instructions.md` nella cartella `.github/copilot-instructions/`. [Prendilo dall'esempio di Microsoft](https://github.com/microsoft/azure-devops-mcp/blob/main/.github/copilot-instructions.md). Questo file istruisce l'AI su come comportarsi specificamente con i tuoi tool e il tuo contesto aziendale.

## Il futuro è già qui

Siamo di fronte a uno di quei momenti in cui la tecnologia fa un salto quantico. Non più interfacce da navigare, menu da esplorare, sintassi da ricordare. Solo conversazione naturale con sistemi che comprendono il contesto e agiscono di conseguenza.

La produttività non si misura più in click risparmiati, ma in barriere cognitive eliminate. Quando puoi dire "aiutami con il bug fix della build 1139 per tornare in verde" e ottenere un'analisi completa con proposte di soluzione, stai vivendo il futuro del software development.

Il limite, a questo punto, è davvero la fantasia.
