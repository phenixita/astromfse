---
title: "Flaky test - il male"
date: "2025-04-30"
permalink: "flaky-test---il-male"
categories: ['devops', 'daily', 'testing']
---

I test sono un elemento cruciale per una software factory che punta alla qualità e alla sostenibilità dei progetti nel lungo periodo.

Per quanto mi riguarda vanno trattati con la stessa cura, se non maggiore, del codice di produzione.

Soprattutto nell'era dove è facile generare codice con AI/LLM che possono suggerire codice di bassa qualità ed è necessario validarlo rapidamente.

(A questo proposito ti consiglio il mio video su 

<div class="youtube-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/xRNIBUVdPrs?start=717"
    title="AI + Test Driven Development"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

)

Una delle piaghe che possono colpire la tua suite di test sono i test _flaky_.

Cosa significa?

## Flaky

Prendiamo la [definizione che ne da Microsoft](https://learn.microsoft.com/en-us/azure/devops/pipelines/test/flaky-test-management).

_A flaky test is a test that provides different outcomes, such as pass or fail, even when there are no changes in the source code or execution environment._

Un test _flaky_ è quindi un test inaffidabile. A volte è verde. A volte è rosso. Non si capisce bene cosa lo influenzi.

Siccome lo scopo primario dei test è quello di trovare problemi concreti e reali nel codice in esame questi test sono uno spreco di risorse e tempo.

## Come trattarli

In questo caso ti trovi davanti a un'occasione di riflessione. Ecco alcune domande che puoi porti:

- Il test è ancora rilevante per la codebase? (se no, eliminalo)
- Riesco a sistemarlo facilmente?
- Che dipendenze ha?
- Cosa vuole esprimere il test?
- Posso esprimere lo stesso concetto in un altro modo / con una implementazione diversa?

In base alle risposte capirai cosa farne: tenerlo, cancellarlo, rifarlo.

## Azioni / Finale

Se nel tuo portafoglio di test ne trovi di flaky non rimandare. Gestiscili e smaltisci subito questo debito tecnico oneroso ed estirpa il male!
