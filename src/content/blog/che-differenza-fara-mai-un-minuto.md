---
title: "Che differenza farà mai un minuto?"
date: "2025-11-27"
slug: "che-differenza-farà-mai-un-minuto?"
categories: [37, 38, 23]
---

Se i test sono lenti, non li userai.

In una suite di test con cui sto lavorando insieme a [Luigi](https://www.linkedin.com/in/luigi-borile-a4a71a11a/) abbiamo una suite di test relativi alle API per verificare codici di errore e formato dei JSON in output.

Il setup originale di questo progetto risale a svariati mesi fa e nel tempo si è arricchito di test.

La suite era arrivata a un minuto scarso di tempo per essere eseguita nel mio PC. Poco tempo, no? Eh, gne, insomma.

Il solo pensiero di aspettare 1 minuto per far girare la suite mi innervosiva.

Sapevo che c'era qualcosa sotto da sistemare per rendere tutto molto più veloce ma non mi ci ero mai messo.

Luigi, invece sì (lui lavora davvero, io faccio finta).

Tempo attuale: 2,5 secondi.

Ora quella suite di test non mi fa più angoscia e so che posso lanciarla ogni volta che mi pare per avere un rapidissimo feedback loop.

E, la pipeline di build, intanto, ci mette 1 minuto in meno anche quella.

I test, se sono lenti, non li userai.

E sì, anche 1 minuto, a volte, può essere tanto!
