---
title: "Misura il lead time"
date: "2025-11-12"
slug: "misura-il-lead-time"
categories: [37, 38]
---

Nel [messaggio precedente](https://micheleferracin.it/traccia-il-work-in-progress/) relativo alle misurazioni da adottare per una software factory abbiamo parlato di WIP limit.

Qui mi concentro sul lead-time.

## Lead-time

Il lead time indica quanto tempo ci impiega la software factory ad evadere una richiesta dal momento in cui viene inserita a sistema al momento in cui arriva in produzione.

Quando ci si impiega mediamente? E con quanta variabilità?

Questa informazione è importantissima perché permette di pianificare e (cosa vorrei vedere in produzione tra X giorni?) monitorare l'efficenza di processo.

È l'indicatore principe della Lean perché è globale e end-to-end: se i processi migliorano allora questo tempo si abbassa.

Ecco un esempio di grafico che monitora il lead-time in Azure DevOps.

![lead-time](https://mfitcontent.blob.core.windows.net/static/cycle-lead-time-lt-sample-chart.png)

In nero vediamo l'andamento della media nel tempo e in grigio la varianza, indice di affidabilità e costanza dei processi.

### Per tipologia

Una cosa utile è avere il lead time dedicato per varie tipologie di lavoro (work-item).

Che tempi abbiamo sui bug?

E sulle user story?

## Conclusione

Quando iniziamo a misurare il lead time, la tentazione è usarlo come un’arma: “questo team è lento”, “quell’altro va più veloce”. Ma il lead time non serve a giudicare le persone: serve a farci vedere il sistema.

Ridurre il lead time non significa correre di più, ma eliminare gli sprechi, i blocchi e l’incertezza che rallentano il valore nel suo percorso verso il cliente.

Quando il tempo medio si accorcia e la varianza si riduce, il sistema diventa più prevedibile.
E la prevedibilità è la vera libertà: permette di promettere con fiducia e di mantenere le promesse.
