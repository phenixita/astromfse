---
title: "I test non devono abusare dei mock"
date: "2025-05-05"
permalink: "i-test-non-devono-abusare-dei-mock"
categories: ['daily', 'testing']
---

Qualche messaggio ho parlato dei test "flaky" e di come siano da gestire con determinazione perché di scarsa utilità e fuorvianti.

Oggi approfondiamo l'annosa diatriba su quanto fare affidamento sui mock nella scrittura di test, tipicamente unit test.

Gli unit test, per definizione, girano in modo isolato senza dipendenze esterne quali file system, motori di database, servizi web di terze parti eccetera. Quindi girano usando esclusivamente la memoria.

Nei casi di classi con dipendenze esterne si ricorre quindi all'iniettare implementazione alternative rispetto a quelle usate dal codice di produzione.

E qui si apre il dibatitto sullo stile "classico VS mock" nell'approccio ai test [trattato anche da Martin Fowler](https://martinfowler.com/articles/mocksArentStubs.html).

Vado dritto al sodo.

Il mio approccio preferito è quello classico. Cosa significa?

Significa che preferisco scrivere i test senza l'utilizzo di mock. E li ho provati entrambi.

Ho avuto la conferma definitiva della mia preferenza qualche mese fa. Avevo iniziato con l'approccio a mock ma dopo qualche giorno di sviluppo mi sono accorto di tutti gli effetti collaterali (e ho ripassato tutta la codebase per ristrutturarli).

Quali sono questi effetti collaterali?

1. I test sono più difficili da capire. Per ogni test bisogna fare il setup del mock, cosa che allunga il brodo e richiede la compresione del setup stesso.

1. I test più difficili da manutenere. Come conseguenza del punto precedente i test diventano più difficli da manutenere. Inoltre, i mock devono, in qualche modo, ricalcare il comportamento del codice di produzione. Così accade che quando cambiano alcune logiche del codice di produzione anche il mock deve essere sostanzialmente rivisto.

1. I test potrebbe essere meno attendili. Usare mock programmati manualmente è fragile: funzionano solo se restano perfettamente allineati alle implementazioni reali, cosa difficile da mantenere nel tempo. 

Per questi motivi, quindi, sostengo fortemente che per i test bisogna evitare il più possibile l'uso di mock.

Come fare quindi?

Lo vediamo nel prossimo post.

## Azioni

Qual è la tua esperienza per isolare il tuo codice dalle dipendenze nei test? Fammelo sapere!
