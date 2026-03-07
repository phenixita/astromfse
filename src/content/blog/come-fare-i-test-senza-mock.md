---
title: "Come fare i test senza mock"
date: "2025-05-06"
permalink: "come-fare-i-test-senza-mock"
categories: [23, 38]
---

Nel messaggio precedente ho detto la mia nella classica diatriba classic VS mock nell'ambito dello unit test.

Giusto per riassumero, sono per l'approccio classico e per evitare il più possibile i mock.

Come fare quindi senza i mock?

Si dovrebbe usare, per quanto possibile, il componente reale invece di farne il mock.

E come fare quando si parla di accesso a database, letture da file system, per esempio?

1) Verifica se il produttore del componente fornisce una versione "fake". Ad esempio Entity Framework (ORM di Microsoft) ha la possibilità di essere usato "in memory". Sempre più componenti offrono fake per gli unit test.
1) Se il fake non c'è e il componente è di terze parti crea una classe wrapper che invochi il tipo esterno e fai mock di questa.
1) Se il fake non c'è e il componente lo scrivi tu, creane uno.

## Reference

Questo messaggio è ispirato dalla serie di blog di Google Testing on the Toilet, episodio: [Don’t Mock Types You Don’t Own](https://testing.googleblog.com/2020/07/testing-on-toilet-dont-mock-types-you.html)
