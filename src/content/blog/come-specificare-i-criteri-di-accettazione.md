---
title: "Come specificare i criteri di accettazione"
date: "2025-12-12"
permalink: "come-specificare-i-criteri-di-accettazione"
categories: [37, 38]
---

Nel [messaggio precedente](https://micheleferracin.it/investire-nelle-user-story/) abbiamo esplorato l'acronimo **INVEST** per valutare la qualità delle nostre User Story. Se hai fatto i compiti a casa, probabilmente ti sei soffermato sull'ultima lettera: **T per Testable** (Testabile).

Dire che una storia deve essere testabile è facile. Ma definire *esattamente* cosa testare e quali sono i confini del successo è dove molti team si incagliano. Spesso ci si ritrova con frasi vaghe come "Il sistema deve essere veloce" o "L'utente deve poter fare login correttamente".

Ma cosa significa "correttamente"? Cosa succede se sbaglio password? E se il server è giù?

Qui entra in gioco uno strumento potente nato dal mondo del BDD (Behavior Driven Development) ma utilissimo per qualsiasi Product Owner o sviluppatore: il formato **Given-When-Then**.

## La formula magica: GWT

Il Given-When-Then (Dato che - Quando - Allora) è un template strutturato per scrivere i **Criteri di Accettazione**. Trasforma requisiti astratti in scenari concreti e inequivocabili.

Ecco come funziona:

* **Given (Dato che):** Descrive lo stato iniziale del sistema. È il contesto necessario prima che l'utente agisca (es. "L'utente è sulla pagina di login").
* **When (Quando):** Descrive l'azione specifica compiuta dall'utente o dal sistema (es. "Clicca sul pulsante 'Invia'").
* **Then (Allora):** Descrive il risultato atteso e osservabile (es. "Viene reindirizzato alla Dashboard").

Usare questo formato rimuove l'ambiguità. Non è più "il login deve funzionare", ma una serie di scenari precisi di causa-effetto.

Vediamo due esempi pratici per capire come trasformare una User Story vaga in una specifica di ferro.

---

## Esempio Pratico 1: Il Codice Sconto

Immaginiamo una classica User Story per un e-commerce:
> **Story:** *Come utente, voglio inserire un codice promozionale nel carrello per ottenere uno sconto sul totale.*

Se la lasciamo così, lo sviluppatore potrebbe avere mille dubbi. Cosa succede se il codice è scaduto? Se è cumulabile? Usiamo il GWT per definire i criteri di accettazione.

### Scenario A: Codice Valido
* **Given** l'utente ha prodotti nel carrello per un totale di 100€
* **And** esiste un codice promozionale attivo "SCONTO10" del 10%
* **When** l'utente inserisce "SCONTO10" nel campo voucher e clicca applica
* **Then** il sistema ricalcola il totale a 90€
* **And** mostra un messaggio di successo "Codice applicato"

### Scenario B: Codice Scaduto
* **Given** l'utente ha prodotti nel carrello
* **And** esiste un codice promozionale "NATALE2023" che è scaduto
* **When** l'utente inserisce "NATALE2023" e clicca applica
* **Then** il totale del carrello rimane invariato
* **And** il sistema mostra un errore "Codice promozionale scaduto"

**Perché aiuta:** Lo sviluppatore sa esattamente che deve gestire l'errore visivo e non toccare il totale. Il tester sa esattamente cosa provare.

---

## Esempio Pratico 2: Cambio Password Sicuro

User Story legata alla sicurezza:
> **Story:** *Come utente registrato, voglio cambiare la mia password per proteggere il mio account.*

Qui il rischio di ambiguità è alto sulle regole di validazione.

### Scenario A: Cambio Password con Successo
* **Given** l'utente è autenticato nella pagina "Il mio profilo"
* **When** inserisce la password attuale corretta nel campo "Vecchia Password"
* **And** inserisce una nuova password valida nel campo "Nuova Password"
* **And** ripete la stessa password nel campo "Conferma Password"
* **Then** il sistema salva la nuova password
* **And** invia una email di notifica all'utente

### Scenario B: Errore di corrispondenza
* **Given** l'utente è nella pagina di cambio password
* **When** inserisce "Pippo123" nel campo "Nuova Password"
* **And** inserisce "Pluto456" nel campo "Conferma Password"
* **Then** il pulsante "Salva" rimane disabilitato
* **And** appare il messaggio "Le due password non coincidono"

**Perché aiuta:** Definisce il comportamento della UI (pulsante disabilitato) e le azioni collaterali (inviare l'email).

## Perché dovresti iniziare a usarlo domani

Scrivere i criteri di accettazione in questo modo richiede uno sforzo iniziale maggiore durante il refinement o la pianificazione, ma il ritorno sull'investimento è enorme:

1.  **Chiarezza:** Product Owner e Dev parlano la stessa lingua.
2.  **Automazione:** Questi scenari possono essere trasformati quasi direttamente in test automatici (pensate a framework come Cucumber o SpecFlow).
3.  **Definition of Done:** Quando tutti gli scenari "Passano", la storia è finita. Nessuna discussione.

## Azioni

Prendi la prossima User Story che devi scrivere o analizzare. Non limitarti alla descrizione. Prova a scrivere almeno **due scenari GWT** (uno di successo e uno di errore/fallimento). Noterai subito quanti dettagli avevi dato per scontati!
