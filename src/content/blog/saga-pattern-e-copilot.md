---
title: "Saga Pattern e Copilot"
date: "2025-12-15"
permalink: "saga-pattern-e-copilot"
categories: [37, 38]
---

Oggi combo tattica di Plan + Agent con Copilot insieme a [Luigi Borile](https://www.linkedin.com/in/luigi-borile-a4a71a11a/). Contesto: Saga Pattern.

Avevamo un pezzo di una codebase che parlava con 3 servizi separati in un cui non era possibile fare un "begin transaction ... rollback / commit" unico e sfruttare le proprietà ACID di un classico setup.

Saga pattern to the rescue!

1) Abbiamo ripassato per bene le varianti e i punti fondamentali del saga pattern grazie alle pagine dedicate al tema su Microsoft Learn Architecture Center.
2) Abbiamo dato un bel prompt in modalità "Plan" a copilot focalizzandolo sulla sezione di codice in cui volevamo implementare il pattern con un modello succoso (GPT Codex 5.1).
3) Abbiamo valutato e rifinito il piano rispondendo alle domande dei corner-case e sulla gestione degli errori che il modello ha evidenziato.
4) Abbiamo avviato l'implementazione con un Sonnet 4.5.
5) Revisionato il codice, ci è sembrato OK (con riserva)
6) Testato il comportamento, tutto liscio!

Prossimo step rifinire quanto proposto dal modello (c'erano appunto alcune cosucce da riordinare) ma direi che ci ha risparmiato qualche ora di implementazione di codice noioso di un pattern noto.

## Copilot Plan mode

Ti 

<div class="youtube-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/w2z5kqAcAiY?start=1"
    title="rimando alla live con Gian Maria Ricci su Copilot"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

 in cui parliamo di tante cose tra cui il plan mode!
