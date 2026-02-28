---
title: "Standardizzare il ciclo di deployment"
date: "2025-03-27"
slug: "standardizzare-il-ciclo-di-deployment"
categories: [37, 38]
---

Standardizzare il ciclo di deployment di un software

Se non sai da dove partire, ecco un processo che puoi seguire.

1) Analizza la situazione (dal push del codice al deployment in produzione) attuale e documentala considerando tutti gli scenari di business sia positivi sia quelli "sfigati".
2) Trova pattern / cose ricorrenti / simili: semplifica e porta a fattor comune. All'inizio non azzeccherai tutto, porta a casa piccoli risultati e documenta la nuova versione del processo.
3) Presta attenzionea alla branching strategy. La strategia di gestione dei branch del repository è un punto importante e si deve adeguare alle esigenze di business. Poniti domande tipo: come traccio le versioni in produzione? Come applico e propago fix tra i branch? Cosa mi interessa tracciare? Come identifico le "versioni"?
4) Implementa/migliora processi di automazione di build (con test).
5) Implementa/migliora processi di automazione di deployment (con test).
6) Goditi il miglioramento.
7) Rinse and repeat.

Standardizzare un processo di deployment che preveda tutte le casistiche REALI (e non solo l'happy path) della produzione di software con tutte le problematiche VERE (test che trovano problemi, script che si piantano, fix da riportare...) è una sfida. Soprattutto se stai affrontando queste tematiche per le prime volte o in un progetto e contesto totalmente nuovo.

Se proverai a seguire i passi indicati sopra accadranno conversazioni o dichiarazioni di questo tipo:

- Sì allora faccio il branch dedicato per la release, così poi parte il processo di build e deployment dedicato.

- Ma poi se ci sono dei fix da fare come la gestisco?

- E che test metto in buld e deployment?

- Tutti o solo una parte per fare prima?

- E li devo eseguire ogni volta?

Conosco bene la situazione! Ci sono passato molte volte!

Allora perché non accelerare i tempi? Magari sono giorni o settimane che tu e il tuo team non siete del tutto convinti di una decisione che avete preso o un problema sembra senza soluzione.

E se potessi sbloccare te e il tuo team in pochissimo tempo?

## Azioni

Prenota ora una call con me e [usa la mia mente per 1 ora](https://calendly.com/limeware-miferrac/usa-il-mio-cervello-1-ora) e chiedimi tutto quello che avresti sempre voluto sapere.
