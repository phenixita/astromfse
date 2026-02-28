Il nostro collega di newsletter Alessio ha risposto al messaggio di evitare l'uso dei mock nei test.

Ho avuto la sua autorizzazione a riportare quanto segue:

## RE:

Sono uno sviluppatore e ho iniziato a occuparmi del testing da poco e mi trovo proprio di fronte alla diatriba tra usare e non usare i mock.
Il mio caso è un po' particolare e anche googlando non ho trovato niente di simile.
In pratica ho sviluppato un wrapper .NET che incapsula una libreria C++. Ne abbiamo diversi in azienda visto che sviluppiamo i driver per le nostre schede e poi forniamo una libreria C++ come API per le operazioni, ma molti clienti usano il C# per cui forniamo anche lo strato soprastante.
In poche parole diciamo che al 90% i nostri wrapper non sono altro che dei "passacarte" che prendono i parametri e li passano alla libreria sottostante.
Cambia solamente l'organizzazione dei dati visto che nel C# c'è una modellazione ad oggetti che manca nelle API C++
Finora abbiamo sempre fatto dei test manuali sui wrapper dedicando tutto il tempo a testare la libreria "vera e propria"

Ora essendo cresciuto il numero dei wrapper e in particolare avendo quest'anno realizzato il wrapper più grande in assoluto (si parla di una libreria di gaming, una software platform completa con circa 130 funzioni) è impensabile fare tutto a mano. Per questo stiamo cercando di passare ai test automatici anche per i wrapper.
I test principali che vogliamo fare sono legati al passaggio dei parametri. Sembra una banalità ma usando il mondo Interop di C#/C++ vogliamo essere sicuri che per ogni funzione chiamata con certi parametri alla libreria C++ arrivino i valori giusti

E qui sta il primo inghippo. Per fare questo ci servirebbe un mock o un fake della libreria C++ sottostante (i miei colleghi spingono per avere un mock) che ad ogni chiamata confronti i parametri
Usiamo NUnit come libreria di Unit testing ma il mock fatto in C++ dovrebbe chiamare una callback (funzione C#) dicendogli quali parametri sono arrivati
Il framework di mocking deve essere ancora nel mondo .NET altrimenti NUnit non potrebbe fare il setup e già qui sta una prima fregatura. Le strutture dati del C++ sono incapsulate nel wrapper e non esposte al cliente, rimangono internal ma per potere istruire il mock bisogna che lui ne abbia conoscenza quindi siamo costretti ad esporle realizzando così un white box testing.

Vorrei riuscire a trovare un altro metodo (anche passando per un mock se necessario, non sono del tutto contrario, ma il tuo articolo di ieri mi ha fatto venire dubbi) per fare un buon testing.
Hai qualche dritta per questo caso? O hai fonti da consigliarmi?

## La mia risposta

Mi hai fatto venire in mente che, se ho capito bene, questa casistica di test potrebbe rientrare nella categoria "Interaction testing". Al che ho ricercato un vecchio articolo che [ti pongo qui](https://testing.googleblog.com/2013/03/testing-on-toilet-testing-state-vs.html).
L'idea è quella di usare mi mock per registrare appunto le chiamate piuttosto che verificare l'output.

Questo ritengo possa essere un validissimo scenario per l'uso di mock e in questo caso specifico di C# magari di Moq.

Poi ho fatto un po' di brainstorming con ChatGPT e sono arrivato a un approccio di questo tipo. Magari dico qualche castroneria perché non incontro praticamente mai casistiche di interazione con librerie C++ .

Definisci un’interfaccia managed che racchiude ogni chiamata P/Invoke:

```csharp
public interface INativeApi
{
    int OperationA(MyStruct param);
    void OperationB(int x, string y);
    // …
}
```

Implementazione del wrapper reale.

```csharp
public class NativeApi : INativeApi
{
    [DllImport("RealLib.dll")]
    private static extern int OperationA_Native(MyStruct param);
    [DllImport("RealLib.dll")]
    private static extern void OperationB_Native(int x, string y);

    public int OperationA(MyStruct param) => OperationA_Native(param);
    public void OperationB(int x, string y) => OperationB_Native(x, y);
}
```

Nel tuo wrapper ad alto livello accetta INativeApi via DI:

```csharp
public class HighLevelWrapper
{
    private readonly INativeApi _api;
    public HighLevelWrapper(INativeApi api) => _api = api;

    public Result DoWork(Model m)
    {
        var s = MapToStruct(m);
        var code = _api.OperationA(s);
        // …
    }
}
```

Nei test usa Moq per intercettare le chiamate:

```csharp
[Test]
public void DoWork_PassaParametriGiusti()
{
    var captured = new List<MyStruct>();
    var mockApi = new Mock<INativeApi>();
    mockApi
      .Setup(a => a.OperationA(It.IsAny<MyStruct>()))
      .Callback<MyStruct>(p => captured.Add(p))
      .Returns(42);

    var wrapper = new HighLevelWrapper(mockApi.Object);
    var model = new Model { /*…*/ };

    var result = wrapper.DoWork(model);

    Assert.AreEqual(42, result.Code);
    Assert.AreEqual(1, captured.Count);
    Assert.AreEqual(model.Field, captured[0].Field);
    // altre asserzioni sui campi
}
```

## Azioni

Cosa ne pensi dell'approccio suggerito? Cosa suggeriresti ad Alessio?

## Sharing is caring

Se conosci qualcuno che potrebbe trovare utile ricevere e-mail per migliorare l'organizzazione dei team di sviluppo software, DevOps e software engineering in generale inoltragli questo post! [Qui può iscriversi](https://go.micheleferracin.it/newsletter) e cominciare a ricevere subito!


<!-- 
{
    "categories": [
        38,
        23
    ],
    "plannedDate": "20250513T05:00:00Z",
    "slug": "re-i-test-non-devono-abusare-dei-mock",
    "title": "RE: i test non devono abusare dei mock"
}
-->