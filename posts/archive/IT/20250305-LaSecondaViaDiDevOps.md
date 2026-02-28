La seconda via di DevOps è basata sul feedback, sul raccogliere informazioni per sapere come stanno andando le cose: amplificando già dove c'è o creando segnali dove non ce ne sono.

## Definizione di telemetria

> Processo di comunicazione automatizzato che trasmette misure e altri dati raccolti in punti remoti e trasmessi a dispositivi di raccolta per il monitoraggio.

Vediamo i vari step per incrementare i feedback o crearne dove non esistono.

## Creazione telemetria

Nei sistemi complessi è difficile avere il quadro completo del sistema e delle sue interazioni: le cose vanno storte.

Spesso ci mancano i dati per sapere cosa è successo.  
*Esempio: abbiamo avuto un problema ambientale o applicativo?*

## Cultura del causa-effetto

La telemetria permette di raccogliere dati e, di conseguenza, è possibile adottare un approccio orientato ai dati. I dati, inoltre, rendono più oggettive le analisi e contribuiscono a rimuovere i giochi "politici" del "dimostrare che non sono stato io".

Quando cerchiamo di arrivare alla causa di un problema, può essere utile porsi queste domande:

- Che prove abbiamo dal nostro sistema di monitoraggio su questo problema?
- Cosa sono gli eventi che hanno portato a questo problema?
- Che ipotesi possiamo formulare per dimostrare i collegamenti causa-effetto?
- Come possiamo provare la nostra tesi?
- Come possiamo verificare che le correzioni ipotizzate sistemino il problema?

## Aggiungere telemetria nella quotidianità

Parte fondamentale dell'approccio alla telemetria è che deve essere molto semplice generarla e collezionarla. Altrimenti, nessuno la creerà o la consulterà.

## Diffusione della telemetria

Chiunque voglia avere accesso alla telemetria deve poterlo fare: come minimo, tutti quelli coinvolti nel value stream.

## Actionable

Le metriche raccolte devono essere "actionable". Con questo si intende che devono avere un significato che permetta di intraprendere delle azioni per migliorare la qualità del servizio. Le metriche che non sono tali hanno pochissimo valore: può avere un qualche valore collezionarle, ma non serve mostrarle graficamente da qualche parte.

## Metriche di business

Nella telemetria e nella quotidianità raccogliamo e visualizziamo dati di business, non solo tecnici o di infrastruttura. In base al contesto, avremo dati interessanti: festività, audit, stagionalità, periodi fiscali, vendite, ...

## Analizzare la telemetria

Ora che abbiamo moltissimi dati a disposizione, li dobbiamo analizzare.

Un famoso progetto, nel 2012, è stato quello di "outlier detection" di Netflix. Basandosi sulla telemetria, quando un server cominciava ad avere comportamenti fuori dai range stabiliti, veniva automaticamente "ucciso" e ricreato nuovo (grazie a *Infra as Code*).

Si considerano outlier gli eventi che si discostano di +/- 3σ dalla Gaussiana.

Questo è solo un esempio di analisi della telemetria e, in base al contesto, possiamo creare le nostre analisi per rilevare i problemi il più rapidamente possibile e farci notificare tramite degli alert.

## Rilasci sicuri

Un approccio strutturato alla raccolta dati permette di sapere se un rilascio sta andando o è andato a buon fine. Dopo il deployment in un ambiente, possiamo avere dei processi che controllano se certe metriche sono in un range OK. Se invece qualcosa sta andando storto, possiamo impedire che il deployment prosegua (ad esempio in un contesto con deployment a ring).

Questo rimuove la paura dei deployment frequenti (*one piece flow*) e rinforza le pratiche di *continuous deployment*.

## Verifica delle ipotesi

Un approccio sempre più maturo alla telemetria ci porta a chiederci, già in fase di progettazione di una feature, quali siano i dati da raccogliere per verificarne:

- il corretto funzionamento,
- che gli utenti effettivamente la usino quanto e come avevamo immaginato.

Questo consente di condurre degli esperimenti (che devono essere il più economici possibile).

## A/B testing

Avendo a disposizione un sistema che genera dati e facilmente consultabili, possiamo implementare tecniche di A/B testing. A un gruppo di utenti (A - controllo) viene rilasciata una feature in un certo modo. All'altro gruppo (B - col trattamento) viene rilasciata la feature diversa. Si confrontano poi gli esiti dell'esperimento e si capisce (se i dati sono conclusivi) in quale direzione proseguire.

## Incremento qualità del codice

Un processo di peer-review tramite pull-request permette ai developer di confrontarsi, anticipare la risoluzione dei problemi e diffondere le best practice.

Le review dovrebbero:

- Tendere ad essere brevi
- Trattare di un solo argomento
- Essere ben discusse e documentate

Consiglio la lettura di questa [ricerca di Smartbear](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/).

## Mindset

Come ben sappiamo, DevOps richiede un cambio culturale/mentale. Concludiamo con [questo video](https://www.youtube.com/watch?t=1590&v=9frodP5xLxk&feature=youtu.be) che racconta il cambiamento che il team di Azure DevOps (ex TFS, Visual Studio Online) ha dovuto affrontare quando è passato da prodotto "in scatola" a servizio in cloud.

<!-- 
{
"categories": [37],
"plannedDate": "20250306T05:00:00Z",
"slug": "la-seconda-via-di-devops",
"title": "La seconda via di DevOps"
}
-->