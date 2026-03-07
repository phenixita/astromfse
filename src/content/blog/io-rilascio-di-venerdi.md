---
title: "Io rilascio di venerdì"
date: "2025-05-24"
permalink: "io-rilascio-di-venerdi"
categories: ['devops', 'daily', 'my-take-on']
---

Il friday freeze è quella tecnica ninja per cui si evita di rilasciare aggiornamenti il venerdì: perché di sabato e domenica non c'è nessuno a sistemare i problemi che puntualmente salteranno fuori!

Spoiler: non si tratta del venerdì ma si tratta di paura.

Paura perché non hai una rete di sicurezza di cui ti fidi.

Cosa sarà mai questa rete di sicurezza? Il tuo processo!

Se il tuo processo, in questo specifico caso, non è sufficientemente maturo in termini di controlli qualità allora non ti fiderai mai a rilasciare di venerdì.

## Svantaggi del blocco del friday freeze

Prima di tutto è un giorno in meno in cui poter rilasciare e potresti averne bisogno (bug urgente, you know).

Questo magari costringe anche altri ad anticipare rilasci i giorni precedenti prendendo scorciatoie pur di non dover aspettare lunedì.

E comunque, anche se rimandi, l'eventuale problema in produzione te lo ritrovi comunque da dover gestire (anche se con il leggero vantaggio delle persone in ufficio ma con i clienti comunque non fai bella figura).

Perciò... come fare?

## Più test automatici!

Ce ne sono per ogni genere di problema che vuoi anticipare:

- unit test, per i singoli componenti
- test di integrazione, per le parti che devono interagire
- test end-to-end, per simulare scenari utente critici
- test di sicurezza, beh... per la sicurezza!
- test di performance... (devo dirlo?)

Prendili tutti e ficcali nel momento corretto in nelle tue pipeline (non serve a ogni commit far girare i test end-to-end, per esempio). Valuta in base al tuo contesto!

## Monitoraggio

Un sistema di monitoraggio e alert che ti avverte quando qualcosa va storto, possibilmente prima che se ne accorga il tuo cliente, è sempre un'ottima idea.

## Piano di emergenza

Progetta delle procedure in caso qualcosa si incastri (e prima o poi lo farà). Rollback? Rollforward? Trova il modo più rapido e compatibile col business per ripristinare il servizio.

in forma di cose da fare o domande da porsi

## Conclusione

Bloccare i rilasci di venerdì è molto old-school. Oggi ci sono tutte le tecnologie e le metodologie per riguadagnare questo giorno nel calendario.
