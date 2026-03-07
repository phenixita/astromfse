---
title: "La prima via di DevOps"
date: "2025-03-04"
permalink: "la-prima-via-di-devops"
categories: ['devops']
---

La prima via di DevOps racchiude i principi e le pratiche per velocizzare il flusso del valore da sinistra verso destra.

## Cos'è il flusso del valore?

### Il Value Stream

Uno dei concetti fondamentali nella Lean è il **Value Stream** (il flusso del valore) che viene definito come segue:

> La sequenza di attività che un’organizzazione deve svolgere per soddisfare una richiesta cliente. (Karen Martin, Mike Osterling)

Nel mondo manufatturiero questo è di solito facile da osservare. Inizia quando un ordine cliente viene inserito a sistema e i materiali vengono movimentati in fabbrica. A questo punto vengono tutte le tecniche possibili immaginabili per ottenere un flusso di attività col minor numero di passaggi e interruzioni, quali:

- Riduzioni di dimensioni del batch/lotto di produzione
- Limitare il Work In Progress (WIP)
- Prevenzione dei difetti per evitare che si propaghino in fasi successive

Per esempio, possiamo immaginare il caso in cui si conferma l'acquisto di un'automobile. Il nostro ordine entra a sistema e (prima o poi) si muoveranno in fabbrica materiali e semilavorati per produrre la nostra auto.

Nel mondo IT possiamo applicare gli stessi principi. L'inizio del nostro processo è un'idea/una ipotesi/una richiesta che entra nel backlog di Development. Da qui subentrano una serie di attività di analisi, poi di implementazione. Successivamente, il codice viene integrato, compilato e testato. Infine, l'artefatto prodotto raggiunge i server di produzione che erogano il servizio per gli utenti finali, traendo beneficio dal valore aggiunto.

## Lead Time e Process Time

Nel mondo Lean ci sono due misurazioni che fanno da padrone:

- **Lead Time**: il tempo che intercorre tra quando viene registrata una richiesta e quando viene soddisfatta.
- **Process Time**: il tempo che intercorre tra quando si inizia a lavorare per soddisfare la richiesta e quando essa viene effettivamente soddisfatta.

Siccome il lead time è quello percepito dal cliente/utente finale, è su di esso che dobbiamo concentrarci.

## Deployment Lead Time

Per abilitare un flusso rapido, possiamo concentrarci sul **Deployment Lead Time** (un sottoinsieme del lead time): l'intervallo di tempo che intercorre tra quando il codice viene salvato nel repository e il momento in cui la versione compilata diventa attiva in produzione (possibilmente generando telemetria che ne valida le funzionalità).

L'obiettivo è quello di ragionare in batch ridotti (il batch ideale è di dimensione 1) e quindi rilasciare incrementi di funzionalità il più piccoli possibile (ad esempio, 1 user story per volta). Per raggiungere questo obiettivo, bisogna investire in automazione, testing e, più in generale, in "shift-left", dove si anticipano a sinistra nel processo attività che tipicamente occorrono in fasi più avanzate. In questo modo, ad esempio, si sovrappongono attività quali sviluppo e test (basti pensare a pratiche come TDD/BDD).

L'ideale è avere un deployment lead time dell'ordine dei minuti. Uno scenario tipico (di circa 40 minuti) può essere:

1. **Commit**
2. **Build automatica e test** (10 minuti)
3. **Deploy ambiente di test** (10 minuti)
4. **Test automatici in ambiente di test** (10 minuti)
5. **Deploy in produzione** (10 minuti)

## Rendere il lavoro visibile

Una delle tecniche primarie per velocizzare il flow è rendere ben visibile il lavoro. Nel mondo manufatturiero, il lavoro ha forma fisica (materiali da muovere), mentre nel mondo IT il lavoro è astratto, non si tocca, non ha peso ma è ovunque. Come gestirlo?

Si può ricorrere a tecniche di visualizzazione come le **kanban board**. Inizialmente adottate in modo fisico negli uffici, ora sono diventate virtuali grazie a tool quali Azure DevOps, Jira, GitLab e molti altri.

L'utilizzo corretto di una kanban board permette di mappare l'intero value stream e di identificare visivamente i colli di bottiglia del processo (dove si "impilano" i post-it).

## Limitare il Work In Process (WIP)

Nel mondo tecnologico i cambi di priorità sono all'ordine del giorno e il lavoro quotidiano può essere difficile da gestire, poiché tutto sembra urgente. Inoltre, essendo il lavoro astratto, cambiare ciò che è in corso può apparire senza effetti collaterali. Nel mondo manufatturiero, invece, cambiare la produzione di macchine già a metà è ben più costoso!

Studi dimostrano che i cambi di contesto, per chi lavora "col pensiero" (knowledge worker), hanno importanti conseguenze: un cambio di contesto richiede mediamente 20 minuti di concentrazione per abbandonare il vecchio argomento ed entrare nel nuovo.

Limitare le attività in corso e i cambi continui, supportati da una kanban board e dai WIP limit, è una pratica estremamente utile e a costi bassissimi per introdurre efficienza nel processo.

## Single Piece Flow

Effettuare il deployment di una singola unità di lavoro può fare miracoli. Rilasciare incrementi di funzionalità più piccoli è meno rischioso e consente di avere feedback più rapidi sul lavoro svolto, poiché non bisogna attendere che altro lavoro "accumuli" per essere consegnato insieme. In caso di problemi, sarà anche più facile identificare le modifiche che sono arrivate in produzione.

Il **Single Piece Flow** è, per questo, sinonimo di **Continuous Deployment**.

## Concludendo

In questo episodio abbiamo conosciuto la **Prima Via di DevOps** e le principali pratiche ad essa associate. Il focus è sull'ottimizzazione dei flussi e la riduzione degli sprechi. La ricerca dell'efficienza è tutto: sii spietato nell'eliminare ciò che non serve e automatizza ciò che non ha valore aggiunto!
