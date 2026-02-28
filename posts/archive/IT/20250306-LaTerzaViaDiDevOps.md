# La terza via di DevOps

Mentre la prima via si occupa del flow da sinistra a destra, la seconda dei feedback da destra a sinistra, la terza si occupa di creare una cultura di apprendimento continuo e sperimentazione.  
Questi principi abilitano la creazione di conoscenza individuale che contribuisce poi alla conoscenza collettiva.

Nelle aziende manufatturiere ad alte prestazioni l'operatività richiede e promuove l'apprendimento continuo. Gli operai in linea eseguono esperimenti nella quotidianità: ciò è possibile grazie a severi standard, procedure e documentazione dei risultati.

Nell'IT l'obiettivo è quello di creare una cultura di fiducia e di promuovere il concetto di apprendimento continuo e di rischio. Applicando l'approccio scientifico sia nel miglioramento dei processi che dei prodotti, impariamo dai nostri errori.

Riserviamo tempo nella quotidianità per l'apprendimento per assicurarci la formazione. Introduciamo volontariamente "stress" nel sistema per abilitare il miglioramento continuo (altrimenti subentra l'entropia e le pratiche regrediscono).

Inoltre, iniettiamo difetti controllati nei nostri sistemi in produzione come metodo di apprendimento dinamico per adattarci a un sistema in continua evoluzione.

## Abilitare una cultura dell'apprendimento e della sicurezza

Quando si lavora in un sistema complesso è, per definizione, impossibile conoscere tutte le conseguenze delle azioni che facciamo sul sistema stesso. Questo è il motivo per cui accadono incidenti più o meno importanti nella quotidianità e dobbiamo prendere precauzioni per lavorare con prudenza.

Quando questi problemi impattano sui nostri clienti, dobbiamo capire cosa è successo. La causa principale è spesso etichettata come "errore umano" e si ricade nella cultura della colpa: si colpevolizza la persona che proverà una forte vergogna. Un management "tradizionale" farà intuire in modo più o meno esplicito che la persona avrà conseguenze e, infine, metterà in piedi ulteriore burocrazia per prevenire il problema in futuro.

Queste problematiche sono presenti nel mondo IT perché si lavora quasi sempre con sistemi complessi. Le reazioni del management contribuiscono a creare o meno una cultura della colpa e della paura.

Dr. Ron Westrum è stato uno dei primi a osservare l'importanza della cultura aziendale nei confronti della sicurezza e delle performance.

Dr. Westrum definisce 3 tipi di cultura

- Patologica. Organizzazioni caratterizzate dalla paura e dalle minacce. Le persone nascondono le informazioni per ragioni politiche e per apparire migliori. Il fallimento è spesso nascosto.
- Burocratica. Organizzazioni caratterizzate da regole e procedure. Il fallimento è processato da un sistema di giudizio che risulta in una qualche forma di giustizia.
- Generativa. Organizzazioni caratterizzate da una ricerca attiva di condivisione delle informazioni e di trasparenza. Le responsabilità sono condivise in tutto il flusso del valore e il fallimento viene esaminato in modo oggettivo e orientato al miglioramento.

## Pratiche della terza via di DevOps

### Creare una cultura "just"

Dr. Sidney Dekker, che ha codificato gli elementi chiave di una cultura "just", scrive: "Quando le reazioni a un incidente sono viste come 'unjust' le indagini sono rallentate e viene promossa una cultura della paura invece che della consapevolezza nelle persone che eseguono lavori critici, rendendo le aziende più burocratiche invece che più prudenti. Si coltivano in oltre i segreti, l'evasione e meccanismi di autoconservazione".

Invece, si dovrebbe adottare una cultura che punti a massimizzare le opportunità di apprendimento, ricordando continuamente che viene valorizzata la trasparenza e la condivisione per affrontare al meglio i problemi del nostro lavoro quotidiano.

### Incentivare il miglioramento del lavoro quotidiano

Si migliora il lavoro quotidiano riservando esplicitamente tempo per ripagare il debito tecnico, sistemare difetti, migliorare parti problematiche del sistema e della codebase. Lo facciamo riservando tempo in ogni "ciclo" di sviluppo o brevi intervalli in cui il team si auto-organizza per risolvere una serie di problematiche specifiche.

### Trasformare scoperte locali in globali

Quando nuove informazioni vengono acquisite "localmente" da un team o da una persona, dovrebbero essere condivise il prima possibile per diventare di beneficio comune. I team e le persone che scoprono qualcosa tramite l'esperienza dovrebbero trasferire la loro conoscenza agli altri in ogni modo utile: meeting, video, wiki e altri strumenti che possano essere impiegati nella pratica quotidiana.

### Creare resilienza

Dovremmo sempre testare i nostri prodotti e processi anche nei modi più fantasiosi. Netflix creò un tool chiamato Chaos Monkey per spegnere a random alcuni dei loro servizi in produzione, per capire come si comporta il sistema in caso di problemi e imparare ad essere resilienti di fronte al failure di un'intera regione di datacenter AWS (cosa che, tra l'altro, è successa nel 2011 e da cui loro ne furono indenni).

### Utilizzare i post-mortem

I post-mortem ben condotti sono una incredibile fonte di apprendimento, ma devono:

- essere condotti senza cultura della colpa;
- partire dal presupposto che le persone coinvolte abbiano lavorato al loro meglio e in buona fede;
- essere svolti il prima possibile, a ridosso della risoluzione del problema.

Dobbiamo:

- raccogliere il "chi" era coinvolto nelle varie fasi del processo che ha causato il problema;
- raccogliere la timeline degli eventi che ha portato all'incidente.

Inoltre:

- stabilire delle date per implementare la fix più rapida possibile e mantenerla;
- pubblicare il post-mortem internamente all'azienda per renderlo consultabile a tutti.

## Conclusione

In sintesi, la terza via di DevOps promuove una cultura basata sull'apprendimento continuo e sulla condivisione delle informazioni. Adottando approcci come l'iniezione controllata di stress e l'uso dei post-mortem, le organizzazioni possono trasformare gli errori in preziose opportunità di crescita, migliorando processi e prodotti e creando ambienti di lavoro più resilienti e collaborativi.

<!-- 
{
"categories": [37],
"plannedDate": "20250307T05:00:00Z",
"slug": "la-terza-via-di-devops",
"title": "La terza via di DevOps"
}
-->