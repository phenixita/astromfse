---
title: "Sai davvero da dove proviene il tuo software?"
date: "2025-08-06"
slug: "sai-davvero-da-dove-proviene-il-tuo-software"
categories: [37, 38, 45]
---

Sto facendo ricerca per la parte di sicurezza del libro "Il metodo software factory" e mi sono imbatutto nel progetto SLSA.dev (si legge "salsa").

Ne ho fatto fare un riassunto all'AI per capire quali contenuti e cosa inserire nel testo.

Condivido qui a futura memoria l'estrazione fatta per comprendere ad alto livello l'argomento.

**SLSA.dev: quando la supply chain del software diventa un terreno minato**

Immagina di costruire una casa. Ti fidi del tuo architetto, del tuo imprenditore, dei fornitori di materiali. Ma come essere certi che i mattoni non siano stati sostituiti con dei falsi durante il trasporto? Che i piani non siano stati modificati tra l'ufficio tecnico e il cantiere?

È esattamente la sfida che affronta ogni riga di codice che scriviamo. Tra il nostro IDE e l'utente finale, il nostro software attraversa un labirinto di sistemi, strumenti e infrastrutture. Ogni passaggio rappresenta un anello potenzialmente debole.

**Il problema: una catena invisibile di fiducia**

Prendiamo l'analogia di un ristorante stellato. Lo chef può controllare la sua cucina, le sue tecniche, le sue ricette. Ma può garantire che i suoi ingredienti non siano stati alterati dalla fattoria? Che il suo fornitore non sia stato compromesso? Che il camion delle consegne non abbia fatto una deviazione sospetta?

SLSA (Supply-chain Levels for Software Artifacts) agisce come un sistema di tracciabilità alimentare per il codice. Documenta ogni passaggio, dalla "fattoria" (il nostro repository) fino al "piatto" (l'applicazione deployata).

**Un approccio progressivo, come un sistema immunitario**

Il framework funziona per livelli, come un sistema di sicurezza bancaria:

- **Livello 1**: come installare telecamere - documentiamo quello che succede
- **Livello 2**: aggiungere allarmi - rileviamo automaticamente le anomalie
- **Livello 3**: compartimentare le casseforti - isoliamo gli ambienti critici
- **Livello 4**: autenticazione biometrica - verifichiamo l'identità a ogni passaggio

Questa progressione ricorda l'evoluzione naturale delle nostre pratiche DevOps. Si inizia con script bash artigianali, poi si adotta CI/CD, quindi infrastructure as code, e infine security by design.

**Implementazione: nessuna rivoluzione, solo evoluzione**

SLSA si integra nel tuo workflow esistente come un GPS nella tua auto. Guidi sempre allo stesso modo, ma ora hai una traccia verificabile del tuo percorso, con timestamp e geolocalizzazione.

Concretamente, quando pubblichi un package npm, SLSA genera automaticamente un "certificato di nascita" digitale: chi ha compilato, quando, in quale ambiente, da quale commit esatto.

**La posta in gioco strategica: credibilità tecnica**

In un mondo dove SolarWinds e Log4j sono diventati nomi familiari, SLSA rappresenta quello che la certificazione ISO rappresentava per l'industria manifatturiera: una garanzia di maturità processuale.

Per i team, è l'opportunità di trasformare la sicurezza della supply chain da punto di attrito in vantaggio competitivo. Come quei ristoranti che espongono con orgoglio la provenienza dei loro ingredienti.
