---
title: "I test non devono essere ordinati"
date: "2025-05-04"
slug: "i-test-non-devono-essere-ordinati"
categories: [37, 38]
---

# I test NON devono essere ordinati

Uno dei principi fondamentali per una suite di test solida, affidabile e scalabile è questo:

> **Ogni test deve poter essere eseguito in qualunque ordine.**

Se l'esito di un test dipende dal fatto che un altro test sia stato eseguito prima… hai un problema. È un campanello d'allarme, esattamente come i *flaky test*.

## Perché è un problema?

Se i test devono essere eseguiti in un ordine preciso:

- **Rallenti il debugging.** Per riprodurre un errore, devi ricordarti di eseguire prima altri test.
- **Perdi parallelizzazione.** I test non possono essere eseguiti in parallelo senza incappare in errori.
- **Rischi risultati falsi.** Un test può "passare" solo perché un altro lo ha messo nella condizione corretta.
- **Rompi il principio di isolamento.** Ogni test dovrebbe essere un microesperimento isolato, ripetibile e deterministico.

## I sintomi

Hai test che:

- Funzionano solo se lanci l'intera suite?
- Falliscono se eseguiti da soli?
- Sono sensibili all’ordine di esecuzione?

Potresti essere vittima di **test dipendenti**. Spesso causati da:

- **Dati condivisi non resettati correttamente**
- **Stati globali (es. filesystem, DB, cache) non isolati**
- **Oggetti mock/stub non azzerati tra i test**

## Cosa fare

Un buon test:

- **Crea il proprio contesto.**
- **Non si aspetta che il mondo sia già pronto.**
- **Non lascia tracce.**

Ecco alcune domande da porti:

- Questo test può essere eseguito da solo, in isolamento?
- L’ambiente è sempre uguale prima e dopo il test?
- Sto usando una fixture o un setup comune che potrebbe essere condiviso malamente?

## Azione immediata

Fai questa prova: prendi alcuni test dalla tua suite e lanciali **da soli, in ordine casuale**. Se uno fallisce, investi qualche minuto per capire *perché*. Potresti trovare un pattern più diffuso di quanto immagini.


## 🔄 Sharing is caring

Se stai lavorando per migliorare la qualità dei tuoi test o quella della tua software factory, iscriviti alla [mia newsletter](https://go.micheleferracin.it/newsletter) e ricevi contenuti pratici, ispirati a situazioni reali, ogni settimana.
