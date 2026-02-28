Ormai saranno stati una decina di anni fa quando per la prima volta incontrai l'acronimo INVEST in termini di linee guida per organizzare e specificare unità di lavoro in un backlog di sviluppo software.

Lo trovai cercando informazioni pratiche quando stavo muovendo i miei primi passi nel mondo dei work-item (in particolare le user story) in Azure DevOps.

Una delle difficoltà maggiori, soprattutto per i software engineer, o per i PO (Product Owner da intendere in senso lato, diciamo i responsabili del backlog) è capire come specificare cosa va fatto e come spezzarlo in unità di lavoro sensate.

## INVEST in aiuto

Se brancoli nel buio e non hai ancora trovato un modo allora esplorare il criterio INVEST può essere un buon punto di partenza.
È utile usarlo come una checklist e passare ogni singolo elemento e chiedersi: "il mio work-item è così"? Se sì, proseguire, altrimenti si rifinisce.

Cominciamo.
### Independent

Una user story dovrebbe essere indipendente dalle altre. Questo significa che può essere sviluppata, testata e rilasciata senza dipendere dal completamento di altre storie. Le dipendenze creano colli di bottiglia, ritardi e complessità nella pianificazione. Se due storie sono strettamente collegate, valuta se combinarle o ristrutturarle. L'indipendenza permette al team di lavorare in parallelo e di riordinare il backlog senza problemi.

### Negotiable

Una user story non è un contratto rigido, ma un invito alla conversazione. I dettagli implementativi devono emergere dal dialogo tra sviluppatori e stakeholder. Il "come" è negoziabile, mentre il "cosa" e il "perché" sono il cuore della storia. Evita di specificare troppo presto ogni singolo dettaglio tecnico. La negoziabilità mantiene la flessibilità e favorisce soluzioni migliori.

### Valuable

Ogni user story deve portare valore tangibile all'utente finale o al business. Se non riesci a spiegare perché qualcuno dovrebbe volere quella funzionalità, probabilmente non vale la pena svilupparla. Le storie tecniche pure (refactoring, infrastruttura) vanno comunque collegate al valore che abilitano. Il valore è ciò che giustifica l'investimento di tempo e risorse. Chiediti sempre: "chi beneficia di questo e come?"

### Estimable

Il team deve essere in grado di stimare lo sforzo necessario per completare la story. Se una storia è troppo vaga o troppo grande, la stima diventa un esercizio di pura fantasia. L'incapacità di stimare è spesso un segnale che servono più informazioni o che la story va spezzata. Non serve precisione assoluta, ma una ragionevole approssimazione. Storie non stimabili creano caos nella pianificazione degli sprint.

### Small

Una buona user story dovrebbe essere completabile in pochi giorni, idealmente entro uno sprint. Storie troppo grandi (epic) devono essere suddivise in pezzi più gestibili. La dimensione ridotta facilita il feedback rapido e riduce il rischio. Piccole storie completate danno al team un senso di progresso e permettono correzioni di rotta frequenti. Se una story richiede settimane, probabilmente nasconde complessità da esplorare.

### Testable

Una user story deve avere criteri di accettazione chiari e verificabili. Se non puoi testare una storia, come fai a sapere quando è finita? I criteri di accettazione definiscono il "definition of done" specifico per quella story. Una storia non testabile è spesso troppo vaga o astratta. La testabilità forza la chiarezza e riduce le incomprensioni tra chi sviluppa e chi accetta il lavoro.

## Azioni

Metti alla prova le user story recenti che hai scritto (o le prossime che scriverai)... sono dei buoni INVESTimenti? :-D

## Sharing is caring

Se conosci qualcuno che potrebbe trovare utile ricevere e-mail per migliorare l'organizzazione dei team di sviluppo software, DevOps e software engineering in generale inoltragli questo post! [Qui può iscriversi](https://go.micheleferracin.it/newsletter) e cominciare a ricevere subito!

 

<!-- 
{
    "categories": [
        37,
        38
    ],
    "plannedDate": "20251211T05:00:00Z",
    "slug": "investire-nelle-user-story",
    "title": "INVESTire nelle user story"
}
-->