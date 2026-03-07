---
title: "AI + Michele = Power"
date: "2025-10-30"
permalink: "ai-michele-power"
categories: [37, 38]
---

Nel [messaggio precedente](https://micheleferracin.it/ai-0-michele-1/) ho parlato di una cantonata presa dall'AI.

Restando sempre nell'ambito di quel progetto, invece, l'uso di AI mi ha permesso di realizzare nel giro di un 15 minuti (test inclusi) qualcosa che probabilmente ci avrei messo ore.

Sempre parlando di migrazione di work-item tra un TFS e Azure DevOps, il cliente, a migrazione terminata, mi chiede un'integrazione di dati nei work-item su Azure DevOps che avrei dovuto esporre tramite dei semplici tag.

A questo punto l'implementazione è stata facile.

1. Ho creato un nuovo branch per modificare in tranquillità i sorgenti
2. Ho dato un prompt del tipo "Modifica l'implementazione di migrazione: se il work-item a destinazione esiste già (verifica tramite tag OriginalWorkItemId:XXX) aggiungi queste informazioni nei nuovi tag bla bla bla prendendole da bla bla bla".
3. Claudio Sonnetto 4.5 mi ha fatto delle domande di chiarimento (non me l'aspettavo)
4. Ho risposto ai suoi dubbi esistenziali
5. Ho avviato l'agente
6. Ho aspettato un paio di minuti di elucubrazioni varie
7. Ho letto il codice
8. Ho testato le modifiche

Il tutto in circa 15 minuti. Probabilmente ci avrei messo un'oretta senza Copilot. Parliamo di boost 4x.

Questi sono gli scenari dove, con una codebase scritta decente, buono uso dei prompt e scenari "one-shot" si guadagna davvero tantissimo tempo. A D O R O.
