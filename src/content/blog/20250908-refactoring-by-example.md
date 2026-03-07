---
title: "Refactoring by example"
date: "2025-09-08"
permalink: "refactoring-by-example"
categories: ['devops', 'daily']
---

Refactoring by example è una tecnica di coding con agenti AI che ho battezzato oggi.

## Storia

Sto lavorando su un progetto C# in cui ho rivisto l'approccio di tutto il sistema di logging che inizialmente era solo abbozzato.

La mia idea, sin dall'inizio, era quello di programmare "muscolarmente" (prendo a prestito il termine dal mondo delle bicilette) invece che in modalità agent.

Perché?

Perché ero in modalità un po' esplorativa e non sarei stato in grado di dare delle istruzioni specifiche all'AI per avere un risultato il più possibile certo.

In questo modo ho modificato quelle 4-5 classi dei sorgenti che mi interessavano per arrivare al risultato che ho scoperto e raffinato strada facendo.

L'approccio usato in quelle classi, poi, deve essere riportato in altre decine di classi che erano rimasti con il sistema di logging appena abbozzato e incoerente.

A questo punto ho avviato un'attivita con un agent di Copilot dicendo qualcosa di simile:

```text
Agisci come un software engineer senior molto esperto che sa interpretare bene i concetti di business espressi dalle righe di codice esistenti con particolare interesse per ambiti:
- [AMBITO DI DOMINIO APPLICATIVO]
- Sistemi multitenant
- Sistemi cloud-first

Prendi come riferimento i seguenti namespace CHE NON DEVI TOCCARE IN ALCUN MODO e sono la reference implementation.
- XXX.Products.Get e il suo Handler e Validator
- XXX.Products.Delete e il suo Handler e Validator

Detto questo leggi bene cosa devi fare qui di seguito.

Con la stessa filosofia fai il necessario per usare lo stesso identico approccio per tutti gli altri sotto-namespace di `XXX.Products`

Mi aspetto che:
- I test unit (L0) siano tutti verdi.
- Ti fermerai di lavorare solo quando tutti i test sono verdi.
- NON AGGIUNGERE O DISABILITARE TEST.
- Ne va del tuo orgoglio se i test si rompono.
- I test sono la cosa più importante per te
- Il namespace XXX.Get e il suo Handler e Validator NON VENGA ALTERATO
- Il namespace XXX.Delete e il suo Handler e Validator NON VENGA ALTERATO
```

Dopo circa 16 minuti di lavoro dell'agente mi sono ritrovato con +30 file modificati come mi aspettavo (ma che ho comunque revisionato uno per uno).

N.B.: Ci tengo a sottolineare come aver avuto un'elevata copertura del codice coi test mi abbia trasmesso tranquillità e garanzia che il comportamento delle classi nelle loro business logic sia rimasto inviariato. Infatti, nelle prime iterazioni dell'agente (guardando i log) si vedeva che aveva rotto dei comportamenti e che leggendo i file Gherkin ha capito come sistemare.

## Refactoring by example - Definizione

Ecco quindi che mi sento ufficialemente di coniare questo termine "Refactoring by example".

> Con il termine _Refactoring by Example_ si intende un approccio al refactoring assistito da intelligenza artificiale in cui l’agente AI utilizza un frammento della codebase come implementazione di riferimento (exemplar). Tale frammento viene assunto come modello stilistico e strutturale da replicare, in modo sistematico e meccanico, su altre porzioni della medesima codebase. L’obiettivo è garantire coerenza architetturale e uniformità delle soluzioni adottate, riducendo al minimo le decisioni ad hoc e favorendo un’evoluzione controllata del software.

## Dettagli

Premessa: si consiglia caldamente di avere una suite di test adeguata per le più alte probabilità di successo.

Questa metodologia di trasformazione del codice che sfrutta l’intelligenza artificiale per applicare in modo estensivo uno schema di implementazione già presente nella codebase.

L’approccio si fonda su tre principi:

1. Exemplar come modello: un frammento di codice esistente, ritenuto corretto e aderente agli standard progettuali desiderati, viene assunto come exemplar (esempio di riferimento).
1. Replica sistematica: l’agente AI applica lo schema logico e strutturale dell’exemplar ad altre porzioni della codebase, adattandolo in modo meccanico ma coerente al contesto locale.
1. Uniformità e riduzione della variabilità: l’obiettivo non è introdurre nuove soluzioni, bensì consolidare quelle esistenti di riferimento, favorendo omogeneità stilistica, leggibilità e mantenibilità del software.

Questa tecnica si distingue dal refactoring tradizionale perché introduce l'elemento AI, riduce l’intervento creativo della stessa e privilegia un processo di “generalizzazione per imitazione”.

In altri termini, l’AI non inventa nuove forme, ma riproduce un paradigma già validato all’interno del sistema.

## Azione

Se ti capita di sperimentare anche tu con agenti AI, prova a chiederti: quale pezzo della tua codebase potrebbe diventare l’exemplar da cui partire?

E soprattutto: hai una suite di test solida che ti permetta di muoverti con tranquillità?

Vale la pena cominciare a vedere i test non solo come una “copertura” ma come la rete di sicurezza che ti permette di innovare il modo in cui scrivi e mantieni codice con l'aiuto della'AI.
