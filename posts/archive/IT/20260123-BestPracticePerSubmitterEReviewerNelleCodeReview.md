Per trasformare le code review da pratica di facciata a qualcosa che migliora davvero prodotto e collaborazione, servono due cose: comunicazione più strutturata e più contesto.

## Best practice per il reviewer

### Da fare

- Entrare in review con mentalità collaborativa (ego fuori);
- Focalizzare il linguaggio e le osservazioni sul codice e sui fatti (file, test, requisiti) invece che sulla persona;
- Dedicare tempo di qualità in slot brevi e concentrati (es. 25–45 minuti) per evitare review fatte di fretta;
- Scrivere commenti che indicano azioni concrete usando un formato chiaro: esplicitare la *richiesta*, motivarla e dire qual è il risultato atteso.

### Da evitare

- Scorrere rapidamente le PR grandi e dire "ok per me";
- Pignoleria senza valore;
- Linguaggio centrato su “tu” che tende ad alzare il livello di conflitto e a rendere i feedback percepiti come attacchi.

## Best practice per il submitter (author)

### Da fare

- Essere il primo reviewer della propria PR (ripulire refusi, debug code, coerenza);
- Tenere i cambiamenti piccoli e focalizzati;
- Aggiungere contesto nella descrizione: perché del cambiamento, cosa cambia, rischi, come testare. Così il reviewer non deve “indovinare” l’intento.
- Spostare il possibile su automazione (lint/format, static analysis, test) per liberare la review da controlli meccanici e concentrarla su design, manutenibilità e correttezza.

### Da evitare

- PR monolitiche
- Ddescrizioni vuote (“fix bug”)
- Inviare codice senza averlo riletto e trattare ogni commento come giudizio personale (la review valuta il codice, non il valore della persona).

## Concludendo

Se nel tuo team ci sono code review ma sono fonte di stress invece che di apprendimento beeeeeeeeh forse hai un problema!

Le code review sono una tecnica molto potente ma da ogni potere derivano grandi responsabilità e bisogna saperle maneggiare con le tecniche giuste.

Solo in questo modo possono davvero contribuire alla qualità del codice, del prodotto ed essere una fonte di miglioramento per le persone!

## Sharing is caring

Se conosci qualcuno che potrebbe trovare utile ricevere e-mail per migliorare l'organizzazione dei team di sviluppo software, DevOps e software engineering in generale inoltragli questo post! [Qui può iscriversi](https://go.micheleferracin.it/newsletter) e cominciare a ricevere subito!

 

<!-- 
{
    "categories": [
        37,
        38
    ],
    "plannedDate": "20260123T05:00:00Z",
    "slug": "best-practice-per-submitter-e-reviewer-nelle-code-review",
    "title": "Best practice per submitter e reviewer nelle code review"
}
-->