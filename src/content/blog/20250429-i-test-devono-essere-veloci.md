---
title: "I test devono essere veloci"
date: "2025-04-29"
permalink: "i-test-devono-essere-veloci"
categories: ['devops', 'daily', 'testing', 'my-take-on']
---

È un imperativo progettuale.

**I test devono essere veloci.**

Quanto veloci?

Se prendiamo Microsoft come riferimento, la linea guida per i test L0 (quelli puramente in memoria, senza dipendenze esterne se non la libreria sotto test) è: **non più di 60 millisecondi**.  
Lo dicono loro stessi in questa pagina: [Shift left: Make testing fast & reliable](https://learn.microsoft.com/en-us/devops/develop/shift-left-make-testing-fast-reliable#unit-test-guidelines)

Sai cosa succede quando i test sono lenti?

**Non li esegui.**

È proprio così. Rimangono lì, in silenzio, a dirti:

> “Siamo dei test. Siamo felici che tu ci abbia scritto. Ci eseguirai… un giorno?”

E tu rispondi:

> “No, siete troppo lenti.”

Hai mai cancellato un test perché troppo lento?

Se è successo, in quel momento hai **perso un’occasione di riflessione**. E magari anche un'occasione di **refactoring**.

Perché quel test era lento?

- Aveva troppe responsabilità?  
- Non era ben isolato?  
- Faceva uso del file system?  
- Aveva una chiamata di autenticazione o dipendeva da un database?

Ogni test lento è una finestra aperta su un design che può migliorare. 

## Azioni  
Ecco alcune domande che puoi porti già oggi:

- Quanto durano mediamente i test del tuo progetto?
- Quali sono i test più lenti? Cosa li rende tali?
- Hai test che potresti dividere o riscrivere per isolarli meglio?
- Il tuo team ha un riferimento temporale chiaro per definire un “test veloce”?
