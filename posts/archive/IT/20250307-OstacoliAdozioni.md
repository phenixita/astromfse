# I principali ostacoli nelle adozioni DevOps

Già dall'inizio abbiamo specificato che DevOps coinvolge le persone. C'è quindi da aspettarsi che la maggior parte degli ostacoli arrivino dalle persone stesse o da gruppi. Per alcune persone i cambiamenti rappresentano dei problemi.

Vediamo quali sono le principali tematiche da tenere in considerazione quando si tratta di ostacoli da superare nelle adozioni DevOps su tematiche che riguardano le persone.

## Cultura resistente al cambiamento

La resistenza culturale all'interno dell'organizzazione è un ostacolo significativo, poiché molte persone possono essere riluttanti a cambiare le pratiche consolidate. Potrebbe essere perché non sono chiari i vantaggi portati dall'affrontare le cose in modo diverso o perché bisogna imparare metodologie e pratiche nuove mettendo in discussione le proprie conoscenze consolidate da anni di pratica.

## Silos Organizzativi

Strutture organizzative con silos funzionali (forti separazioni tra team Dev, Ops, Security, Audit...) ostacolano la collaborazione e la comunicazione tra team, rendendo difficile implementare una cultura DevOps.

Alla base della cultura DevOps c'è una forte volontà di migliorare l'interazione tra persone mettendo in discussione anche la formazione di come sono formati in azienda (favorendo un approccio "market-oriented" rispetto al "function-oriented").

Questi cambiamenti, quando sono effettuati senza un piano strategico, potrebbero destabilizzare le persone abituate a lavorare in un certo modo da tanto tempo o ad avere ruoli e responsabilità che cambiano. Ad esempio, i team Operation devono cambiare il modo in cui operano sull'infrastruttura adottando strumenti che abilitano l'approccio *Infrastructure as Code* e realizzando tool che permettano a chiunque di operare in modalità self-service.

[Microsoft Engineering Stories - Our DevOps Journey (1 of 4)](https://www.youtube.com/watch?v=3FUhl3y0Qd4&t=91s)

## Il cambiamento non è supportato dal management

L'assenza di coinvolgimento della leadership o mancanza di supporto può ostacolare l'adozione di pratiche DevOps (e l'ho visto accadere in più casi). Può arrivare a fermare un'adozione per intero alla sua partenza o può limitarne le potenzialità fermandosi ad aspetti superficiali (i più tecnologici) dell'iniziativa.

L'approccio della leadership è fondamentale perché ogni cambiamento porta nelle prime fasi delle inefficienze. Si devono imparare modi e tecnologie diverse che, quindi, richiedono tempo di apprendimento e rallentano il normale procedere delle cose.

Quando la leadership è ignara del valore del cambiamento, allora non vengono allocati tempo e risorse per supportare la trasformazione.

Questo può avvenire in realtà di tutte le dimensioni: dalle più grandi alle più piccole.

[Microsoft Engineering Stories - Our DevOps Journey (2 of 4)](https://www.youtube.com/watch?v=EphPwecvAeM)

Da un punto di vista più tecnico, invece, i colli di bottiglia nelle adozioni DevOps seguono tipicamente questo percorso

- Creazione di ambienti
- Deployment del codice
- Test setup ed esecuzione
- Architettura troppo accoppiata

### Creazione di ambienti

Quando non si applicano tecniche DevOps, la creazione degli ambienti (di produzione e non) è un collo di bottiglia molto sentito. I developer lamentano l'assenza di ambienti di test e, quando ne richiedono di nuovi, i tempi di approvvigionamento sono molto lunghi. Questo impatta sulle pratiche di testing. In particolare, si arriva a lavorare "in grandi batch" perché, visto che è difficile testare per scarsità di ambienti, si accumulano feature in modo tale che, quando riesco a installare su un ambiente, posso eseguire molti test.

Si deduce, quindi, che trasformare il modo in cui si creano e gestiscono gli ambienti (investendo in approcci cloud o ibridi, *Infrastructure as Code*, uso di repository tipo git anche per i team di Operation) porta enormi benefici e un ritorno sull'investimento molto rapido.

### Deployment del codice

Una volta che abbiamo risolto la creazione e configurazione degli ambienti, il problema successivo da risolvere è quello di installare le nuove versioni in modo rapido e senza dipendere dalle persone. Arrivano in nostro soccorso le automazioni con le pipeline di deployment che devono riprendere le fila da dove la *continuous integration* termina le sue responsabilità.

Solo automatizzando il deployment abilitiamo un flusso rapido da developer a operation e, in definitiva, verso i nostri utenti finali.

[Microsoft Engineering Stories - Our DevOps Journey (3 of 4)](https://www.youtube.com/watch?v=KzQRd6jBE1Q)

### Test setup ed esecuzione

Automatizzare gli ambienti e il deployment dei componenti risolve il problema delle tempistiche, ma non della qualità. Un processo di deployment che non include controlli di qualità è un lavoro a metà. Non possiamo permettere che i nostri artefatti arrivino agli utenti finali senza passare controlli che ne certifichino un determinato livello di qualità.

Nascono quindi le tematiche di test automatizzati che dobbiamo svolgere mentre i nostri artefatti attraversano la pipeline di deployment. Abbiamo, di solito:

- Test di integrazione: prevedono di sollecitare il nostro sistema a vari livelli stimolando l'interazione tra almeno due parti del sistema stesso. Esempio: delle API e un database.
- Test end-to-end: prevedono di sollecitare il sistema facendo partire delle transazioni sintetiche che simulino il comportamento di un utente finale (ad esempio con strumenti tipo [Playwright](https://github.com/microsoft/playwright)).

In entrambi gli scenari ci sono da gestire tematiche riguardanti i dati di test a corredo. Si utilizzeranno dati generati casualmente? Un database preso dalla produzione con i dati sensibili mascherati? Queste sono alcune delle domande a cui dovremmo rispondere quando si progettano i test in pipeline.

### Architettura accoppiata

L'argomento dei test apre spesso uno scheletro pieno di armadi. Codice legacy progettato con metodologie non guidate dai test (TDD / BDD) rende difficile l'esecuzione e la scrittura di test automatici a tutti i livelli, in particolare di unit test. Con una codebase / architettura accoppiata, spesso si ricade nell'uso di test manuali oppure si automatizzano test di integrazione o end-to-end. Tuttavia, questo porta a un portafoglio di test a forma di "cono gelato" e non di piramide, con alla base una forte componente di unit test. I test di integrazione ed end-to-end sono più lenti da eseguire e più costosi da scrivere rispetto agli unit test, per questo motivo la loro esistenza è giustificata in proporzione minore rispetto agli unit test ([shift-left](https://learn.microsoft.com/en-us/devops/develop/shift-left-make-testing-fast-reliable#case-study-shift-left-with-unit-tests)).

[Microsoft Engineering Stories - Our DevOps Journey (4 of 4)](https://www.youtube.com/watch?v=0MsjACD-Als)

## Conclusione

In conclusione, l'adozione di DevOps può incontrare numerosi ostacoli legati sia alla cultura aziendale che agli aspetti tecnici. La resistenza al cambiamento, i silos organizzativi e la mancanza di supporto dal management sono tra i principali fattori che rallentano la trasformazione. Tuttavia, affrontare questi problemi con un approccio strategico e un forte impegno nella creazione di ambienti automatizzati, deployment efficaci e test di qualità può portare a enormi benefici. Superando questi ostacoli, le aziende possono ottenere una maggiore efficienza, velocità e qualità nei loro processi, creando un ciclo virtuoso che migliora costantemente le operazioni e la cultura aziendale.

<!-- 
{
"categories": [37,38],
"plannedDate": "20250307T05:00:00Z",
"slug": "ostacoli-adozioni-devops",
"title": "I principali ostacoli alle adozioni DevOps"
}
-->