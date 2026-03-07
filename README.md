# Astro MFSE

README operativo per il futuro me stesso: note pratiche, percorsi chiave, scelte di progetto e rituali di manutenzione. Non e un documento marketing.

## Stack e versioni
- Astro 5.x + MDX
- Node.js 18+ (consigliato 20+)
- npm

## Struttura rapida
- `src/` codice Astro, layout, componenti e pagine
- `src/content/blog/` post del blog con frontmatter YAML
- `src/styles/` styling globale e palette
- `public/` asset statici, robot/AI files
- `scripts/` migrazioni contenuti
- `infra/` Bicep

## Comandi essenziali
- Dev server: `npm run dev`
- Build statico: `npm run build`
- Preview build: `npm run preview`

## Contenuti: blog
Regole fisse:
1. File `.md` in `src/content/blog/`
2. Frontmatter obbligatorio: `title`, `date`, `slug`, `categories`
3. Validare in locale con `npm run dev`
4. Build prima di deploy

Checklist rapida:
- Slug unico e coerente
- Date in ISO (YYYY-MM-DD)
- Categorie coerenti con `src/data/categories.ts`

## SEO e meta
- Tutto passa da `src/layouts/BaseLayout.astro` (OG/Twitter/JSON-LD)
- Non duplicare meta in singole pagine se non necessario

## Cookie e privacy
- Il banner emette `cookie-consent` (CustomEvent)
- Qualsiasi analytics deve ascoltare quell'evento

## Stile e tema
- Palette in `src/styles/global.css` (variabili CSS in cima)
- Evitare framework CSS, restare su CSS puro

## Deploy
- Output statico in `dist/`
- Hosting variabile: aggiorna qui se cambia pipeline

## CI/CD (GitHub Actions)
Workflow unico: `.github/workflows/deploy-swa.yml`

Comportamento:
- `push` su `main`: infra sempre, poi build/deploy app
- `pull_request` su `main`: infra sempre prima dei job SWA
- `pull_request` su `main`:
	- `opened/synchronize/reopened`: deploy ambiente di staging SWA
	- `closed`: chiusura ambiente staging

Ordine logico su `main`:
1. Job infra (deploy condizionale)
2. Job build app
3. Job deploy SWA

Segreti richiesti:
- `AZURE_CLIENT_ID`
- `AZURE_TENANT_ID`
- `AZURE_SUBSCRIPTION_ID`

Nota token SWA:
- Fonte unica: output `deploymentToken` di `infra/main.bicep`
- Nessun fallback e nessuno skip su secret mancanti

Repository variables richieste:
- `AZURE_RESOURCE_GROUP`
- `SWA_NAME` (default fallback: `swa-mfse`)
- `AZURE_LOCATION` (default fallback: `westeurope`)
- `SWA_SKU` (default fallback: `Free`)

## TODO ricorrenti
- Verifica che `public/robots.txt` e `public/llms.txt` siano coerenti
- Controllo link rotti su pagine nuove
- Review accessibilita base (contrasto, heading order)

## Licenza
Uso interno. Tutti i diritti riservati.