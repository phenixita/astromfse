---
title: "Considerazioni su GitHub SpecKit (parte 1)"
date: "2025-10-27"
slug: "considerazioni-su-github-speckit-parte-1"
categories: [32, 40, 38]
---

Quando mia mamma tornava dal supermercato era sempre entusiasta delle cose che comprava che sulla confezione riportavano la scritta "novità": "Ehi guarda ho comprato una novità!" diceva. A volte (più di qualcuna) era un qualche prodotto che aveva variato il 2% degli ingredienti e allora sfoggiava la scritta "nuova ricetta" ma lei era felice lo stesso nonostante fosse stata intrappolata dal marketing!

E niente, devo aver preso da lei per le novità perché io sono così per tutte le novità che riguardano la produzione di software.

Consapevole di tutto ciò prima di dire che un tool è fighissimo e fa miracoli mi piace spenderci delle ore sopra per capirlo davvero.

La settimana scorsa ho investito parecchie ore nello sperimentare su un caso reale con [SpecKit di GitHub](https://github.com/github/spec-kit).

## Cos'è GitHub Spec Kit

Nel loro [repo](https://github.com/github/spec-kit) si legge in grande:

> An open source toolkit that allows you to focus on product scenarios and predictable outcomes instead of vibe coding every piece from scratch.

È una collezione di prompt precompilati e scripting per gli AI assistant per aiutare nella creazione di specifiche e facilitare il Spec-Driven-Development.

## Per cosa l'ho usato io

In team dovevamo iniziare lo sviluppo di una nuova intera funzionalità applicativa: settimane di lavoro, per intendere l'ordine di grandezza.

Mi sono detto: perché non provare a usarlo? Magari ci aiuta **nello stendere le specifiche**!

Già qui lo scenario è interessante perché si tratta di un progetto già esistente invece che partire da foglio bianco, scenario comunque previsto dal tool.



<div class="youtube-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/a9eR1xsfvHg"
    title="Risparmio tutti i dettagli tecnici dei singoli comandi per usarlo (è ben documentato e il PM fa parecchi video [YouTube"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

 al riguardo) ma ecco un super riassunto]

- /speckit.constitution: create or update project governing principles and development guidelines
- /speckit.specify: define what you want to build (requirements and user stories)
- /speckit.plan: create technical implementation plans with your chosen tech stack
- /speckit.tasks: generate actionable task lists for implementation
- /speckit.implement: execute all tasks to build the feature according to the plan

### Tentativo 1 - Esplorativo

Mi sono buttato un po' alla garibaldina e, usando i suoi comandi (constitution, specify, plan) senza ulteriori indicazioni da parte mia, ho lasciato molto spazio di manovra all'AI. Risultato? Sbrodolate infinite di artefatti prodotti che non andavano nella direzione che volevo. Tanti token bruciati.

### Tentativo 2 - Strutturato

Invece che cominciare a buttare giù la classica struttura gerarchica in Azure DevOps con feature e user story abbiamo aperto un file markdown e cominciato a descrivere la feature:
- Descrizione generica
- Glossario
- User journey
- User story
- Macro architettura

(qui l'ho scritto filato e ordinato ma il processo è stato come al solito un mix di ordine e caos! non si scappa!)

Una volta avuto un documento con un minimo di senso ho avviato SpecKit nell'ordine previsto: constitution, specify, plan.

Task e implement, per ora non li ho provati.

E qui le cose si sono fatte interessanti.

## Cosa ne penso (fino qui)

Ecco cosa ne penso di questa prima sperimentazione con una parte delle feature di Spec Kit (constitution, specify, plan).

### Le cose interessanti

Il comando `specify`, indirizzato su una specifica parte della feature che volevo, mi ha sicuramente aiutato a descrivere in modo più strutturato le user story considerando il punto di vista dell'utente e approfonditi criteri di accettazione (acceptance criteria) sia funzionali che non funzionali. Inoltre, con il comando `clarify` ha trovato degli edge-case che avevamo intuito in fase di brainstorm e ha proposto delle opzioni di risoluzione interessanti.

`plan` ha creato un piano di implementazione tecnica, su nostre indicazioni macro-architetturali, avvicinandosi molto a quello che avevamo ipotizzato. È stato utile controllare tutto quello che ha "pensato" l'AI come per ripasso e per contro-verifica delle nostre idee. La cosa clamorosa, qui, è che ha beccato un dettaglio che noi avevamo trascurato!

### Il reality-check

Come per tutti i tool a base di AI bisogna sempre controllare tutto quello che producono e cercare di fargli fare il meno possibile di sua iniziativa.

Nel secondo tentativo, usando qualcosa di già "pre-masticato" da noi e indirizzando i vari comandi per creare specifiche e task la differenza si è vista.

Nulla è stato regalato.

Eravamo 3 persone di cui 2 senior coinvolte nell'analisi che ha poi permesso al tool di fare qualcosa di sensato e ben coerente con il nostro pregresso.

Ore sono state spese per capire come funziona il tool, capire bene, riprovare e indagare.

Tutto questo conferma che i progetti "veri" la tecnologia attuale non permette all'AI di sostituirci.

Si usano una importante quantità di token! Attenzione ai piani di abbonamento!

## Prossimi passi

### Azure DevOps

Creare i work-item su Azure DevOps tramite MCP Server dandogli in pasto quello che è stato prodotto con SpecKit.

### SpecKit, parte 2

Proverò sicuramente i comandi rimasti del kit per vedere quanto si riesce ad avvicinare all'implementazione che faremmo noi di nostro pugno.
