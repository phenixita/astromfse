In episodio parliamo di come avviare una iniziativa DevOps.

## Come avviare un'iniziativa DevOps

Come decidiamo dove iniziare con un'iniziativa DevOps per innovare la nostra organizzazione?

Quando vogliamo applicare pratiche nuove all'interno di un contesto dobbiamo essere consapevoli che stiamo coinvolgendo persone e le relazioni tra di loro. Ecco quindi delle accortezze per massimizzare le nostre possibilità di successo e su cosa concentrarci.
 
In particolare tratteremo di:
- Capire da quale stream di valore partire.
- Capire il lavoro che viene svolto e scegliere i value stream candidati.
- Progettare i team e l'architettura sfruttando la legge di Conway.
- Avviare un'iniziativa è un percorso pieno di incognite - stiamo iniziando un viaggio verso uno stato finale che riusciamo a immaginare ma gli step intermedi sono difficili da prevedere.

In questo episodio cerchiamo di anticipare quello che potrebbe accadare e fornire una guida con step pratici da poter applicare.

## Capire da quale stream di valore partire

Il value stream da cui avviare l'iniziativa DevOps è una scelta delicata. Questa scelta determina la difficoltà della trasformazione sia per l'ambito tecnico per le persone coinvolte.

Una strategia valida è quella di scegliere un ambito dove non si creano enormi stravolgimenti ed è possibile ottenere dei risultati rapidamente per dimostrare la validità dell'iniziativa e poter replicare i cambiamenti poi in altre parti dell'organizzazione. Questo può significare concentrarsi su uno specifico prodotto o piattaforma importante per il business ma non critico.

Ad esempio si potrebbe concentrare l'iniziativa su team specifico per una particolare versione del nostro prodotto/servizio tipo la versione mobile o desktop. In questo modo si ottiene un team dedicato a questa versione con un singolo backlog prioritizzato sui bisogni dei clienti e si evita di avere un team che segue tanti progetti in contemporanea con conflitti di pianificazione.

## Scenario greenfield o brownfield

I progetti greenfield sono quelli dove si parte da foglio bianco o quasi. I brownfield sono quelli dove ci sono già uno o più servizi/prodotti usati dai clienti.
 
Gli scenari greenfield sono spesso usati come piloti per dimostrare la fattibilità di un'iniziativa DevOps o una nuova iniziativa tecnica (adozione public cloud, esperimenti di automazione, ecc...).
 
Partire con un progetto greenfield potrebbe essere più facile perché si hanno meno vincoli di progettazione. Inoltre, siccome stiamo partendo da zero, non dobbiamo preoccuparci di codebase legacy, processi già esistenti o team preformati.
 
Anche iniziare da uno scenario brownfield può funzionare. Uno dei risultati del 2015 State of DevOps Report ha dimostrato che l'età della codebase non è un indicatore significativo inquesto ambito; lo sono piuttosto l'architettura (o la possibilità di essere ristrutturata) in termini di testabilità e facilità di deployment.

## Comincia col gruppo più innovativo

All'interno di ogni azienda ci sono team e persone con un diverso atteggiamento nei confronti del cambiamento e delle nuove idee. Il nostro obiettivo è quello di identificare i team che già hanno bisogno (o pensano di) adottare pratiche DevOps; meglio ancora se hanno già dimostrato in passato di essere in grado di innovare e migliorare autonomamente i loro processi.
 
Soprattutto nelle fasi iniziali non si spreca tempo a convertire i gruppi più conservativi. Invece, ci oncentriamo sul creare casi di successo con gruppi di persone poco propense al rischio e costruire le basi da qui. Anche se si ha un forte appoggio dal management/leadership è consigliato evitare approcci "big bang" dove si applica tutto e ovunque.

## Espansione

Porre solide basi per il cambiamento è fondamentale e questo si ottiene ottenendo risultati rapidamente, documentandoli e diffondendoli. Questo si può raggiungere spaccando le attività in piccoli step incrementali. Questo non solo dimostra i nostri miglioramenti più velocemente, ma ci permette di capire quanto prima gli errori e correggere il percorso.
 
Mano a mano che otteniamo progressi possiamo espandere l'ambito dell'iniziativa DevOps.
 
## Capire il lavoro che viene svolto e scegliere i value stream candidati.

Una volta che abbiamo identificato lo stream di valore a cui applicare la transofmrazione, il prossimo step è quello di capire come il valore è rilasciato al cliente finale: che lavoro viene svolto, chi lo fa e quali step possiamo attuare per migliorare il flusso.
 
Ecco come fare:

- Identificare tutti i team coinvolti nella creazione del valore.
- Creare una mappa del value stream per rendere il lavoro visibile.
- Usare la mappa per guidare il team su come creare valore più rapidamente per il cliente finale.

Tipicamente in un flusso del valore anche solo mediamente complesso nessuno conosce tutto il lavoro completo che deve essere fatto per creare il valore per il cliente finale.

## Creare una mappa del valore per poter vedere

Una volta identificato chi partecipa alla creazione del valore si disegna una mappa. Nel nostro flusso idale del valore probabilmente il lavoro inizierà da qualcuno (Product Owner) che gestisce richieste cliente o una idea/ipotesi di business. Più tardi il lavoro verrà preso in carico da Development che svilupperà e farà check-in del codice. A questo il codice verrà integrato e compilato, testato in uno scenario production-like e infine rilasciato agli utenti finali.
 
In molte aziende, invece, questo flusso consiste in decine o centinaia di piccoli step che richiedono il lavoro di decine di persone. Per questo costruire una mappa della creazione del valore è un workshop che può richiedere anche più di un giorno con rappresentati da ogni reparto in un workshop dedicato.

Lo scopo non è quello di documentare tutto nel minimo dettaglio ma di avere un'idea degli step che compongono il nostro flusso e cosa ne impedisce un fluire senza intoppi.

## Progettare i team e l'architettura sfruttando la legge di Conway

Negli episodi precedenti abbiamo appreso il legame tra l'architettura software e la topologia dei team che la implementano con la legge di Conway.

Come organizziamo i team ha un profondo impatto sul software che produciamo anche in termini architetturali e di affidabilità in produzione.

Nell'ambito delle strutture organizzative ci sono 3 principali strutture come definite da Dr. Roberto Fernandez.

- Funzionale. Orientata alla specializzazione, divisione dei compiti e/o riduzione dei costi. Tipicamente con gerarchie forti e molto verticali. Tipiche del mondo Operation - (server admin, network admin, db admin, ...)
- Orientate al mercato. Ottimizzate per rispondere rapidamente al bisogno dei clienti. Con gerarchie tendenzialmente piatte e larghe. Suddivse in dipartimenti cross-funzionali - (marketing, engineering, ...). Questo è l'assetto in cui molte realtà mature in ambito DevOps operano. Speed over cost.
- Matrice. Un ibrido tra funzionale e orientato al mercato. Risultano in gerarchie complesse e dinamiche difficili da organizzare.
- L'obiettivo di una trasformazione dovrebbe essere quello di creare o convertire team verso un approccio orientato al mercato con una preferenza ad ottimizzare per velocità - invece che per costi. Questo genere di team non è solo responsabile dello sviluppo ma anche del testing, messa in sicurezza, operation e stabilità in produzione. I team sono - multi-funzionali e indipendenti l'uno dall'altro.

Anche team funzionali possono funzionare bene, finché ognuno è consapevole dell'intero flow e ha il valore per il cliente come obiettivo finale ben saldo nella propria mente.

## Azioni

### Esercizio 1 - Identifica

Identifica un potenziale ambito nel tuo contesto organizzativo dove poter introdurre innovazione tramite principi e pratiche DevOps

### Esercizio 2 - Rendi visibile

Rendi visibile il flusso di creazione del valore con un workshop di gruppo.

### Esercizio 3 - Analizza le tipologie di team

Analizza i team nel contesto in cui lavori: a quale tipologia sono affini? Cosa cambieresti per renderli più affini a una tipologia market-oriented?

## Sharing is caring

Se conosci qualcuno che potrebbe trovare utile ricevere e-mail per migliorare l'organizzazione dei team di sviluppo software, DevOps e software engineering in generale inoltragli questo post! [Qui può iscriversi](https://go.micheleferracin.it/newsletter) e cominciare a ricevere subito!

## Rispondo alle tue e-mail

Nessuno ci fa mai caso ma puoi rispondere a questo messaggio e io lo leggerò! Fammi sapere cosa ne pensi!

<!-- 
{
    "categories": [
        37,
        38
    ],
    "plannedDate": "20250310T05:00:00Z",
    "slug": "come-avviare-un'iniziativa-devops",
    "title": "Come avviare un'iniziativa DevOps"
}
-->