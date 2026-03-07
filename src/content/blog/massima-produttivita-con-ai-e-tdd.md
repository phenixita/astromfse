---
title: "Massima produttività con AI e Test-Driven Development TDD"
date: "2025-04-04"
permalink: "massima-produttivita-con-ai-e-tdd"
categories: [37, 38]
---

Ieri ho detto che il coding assistito [con l'AI è come avere al proprio fianco uno stagista](https://micheleferracin.it/lai-ha-cosparso-il-mondo-di-stagisti/).

Ma se sfruttassimo questo stagista per applicare il famoso mantra _make it work, make it right, make it fast?_

## TDD 101

Alla base del Test-Driven Development c'è il classico processo _red-green-refactor_:

1. Red: scrivo il test (che fallisce) (anche non compilare è un fallimento valido);
1. Green: scrivo una prima implementazione e il test passa;
1. Refactor: modifico il codice di implementazione per migliorare (_make it work, make it right, make it fast_);

Una volta che sono soddisfatto del codice aggiungo un nuovo test e via di nuovo col ciclo.

### Make it work

Al primo giro faccio la prima implementazione che mi viene in mente per far passare il test.

Non deve essere codice raffinato, basta che il test passi.

Ed è qui che con l'AI posso fare _scaffolding_ di una prima soluzione. Come se lo stagista/AI mi facesse una proposta. A questo livello però _la lascio correre_ tanto sarà il test a validare la soluzione.

### Make it right

A questo punto posso entrare nello specifico di quello che ha proposto l'AI e vedere se mi sta bene.

Se non mi sta bene posso "fare giusto" seguendo le mie best-practice, convenzioni aziendali o altro...

### Make it fast

Qui sono in fase di ottimizzazione. Potrei spingermi ulteriormente e sfruttare funzionalità avanzate del linguaggio, ripensare interamente l'algoritmo scritto per spremere qualche millisecondo o usare ancona meno RAM.

Questa potrebbe essere una fase particolare perché ottimizzare in anticipo tutto e subito si rivela spesso controproducente nel grande schema delle cose.

## Ne deriva di conseguenza che

L'uso più furbo del coding assistito da AI, per me, è con una forte abbinata agli _unit test_ scritti durante la fase di sviluppo (meglio se prima con un approccio TDD).

Più il portafoglio di test è maturo più possiamo lasciare sperimentare lo stagAIsta con il suo codice generato in base a training e calcoli probabilistici... tanto ci penseranno i test a mettere un bel semaforo rosso se qualcosa si rompe!

## Il "nuovo ruolo" del developer

A questo punto le responsabilità del developer sono più centrate sul progettare e scrivere i test ponendosi domande quali:

- Cosa deve fare davvero questa mia classe / funzione?
- Quali sono i casi limite?
- Quali sono gli scenari comuni?

Di certo un'AI non può sapere quali siano le risposte a queste domande perché il dominio del problema è nella testa del developer e del team di sviluppo.

E se non lo è queste domande lo aiuteranno a fare chiarezza prima di scrivere codice di produzione potenzialmente inutile.

Ed ecco quindi la *miglior combo per la produttività*, secondo il mio parere, al momento di dev (che pensa dove l'AI non può) e AI (che propone cose tecniche).

## Azioni

Cosa ne pensi?

Hai mai sperimentato TDD in combo con AI? Fammelo sapere!
