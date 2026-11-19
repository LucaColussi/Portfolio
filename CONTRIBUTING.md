# Sviluppo locale

Il progetto usa Next.js con App Router, React, TypeScript e Tailwind CSS. Il codice segue una struttura feature first; le convenzioni complete sono in [AGENTS.md](AGENTS.md).

## Requisiti

- Node.js 20.19+ oppure 22.13+; per lo sviluppo è consigliato Node.js 22 LTS.
- npm.

Se si usa nvm, eseguire `nvm install` e `nvm use` nella cartella del progetto per selezionare la versione indicata in `.nvmrc`.

## Avvio locale

```sh
npm ci
npm run dev
```

Aprire [http://localhost:3000](http://localhost:3000). Le modifiche ai file vengono aggiornate automaticamente nel browser.

Da VS Code è possibile avviare lo script `dev` anche dal pannello **NPM Scripts** o da un'estensione che esegue gli script npm. Next.js richiede il proprio server: estensioni come Live Server, che servono soltanto file statici, non sostituiscono `npm run dev`.

## Comandi

| Comando | Funzione |
| --- | --- |
| `npm run dev` | Avvia il server di sviluppo. |
| `npm run build` | Genera la build di produzione. |
| `npm start` | Avvia la build di produzione, dopo `npm run build`. |
| `npm run typecheck` | Verifica i tipi TypeScript. |
| `npm run lint` | Esegue ESLint. |

## Organizzazione del codice

```text
src/
  app/                  # Route, layout, metadati e stili globali
  features/
    introduction/       # Presentazione personale
```

Le altre aree previste sono `education`, `experience` e `projects`: le rispettive cartelle verranno create con la loro implementazione. Componenti, dati e tipi restano nella feature di appartenenza. Le pagine compongono le feature.

I componenti effettivamente condivisi vanno in `src/components/layout/` o `src/components/ui/`; gli helper comuni in `src/lib/`. Non creare cartelle vuote o astrazioni anticipate. L'alias `@/*` punta a `src/*`.

Le immagini di riferimento sono in `docs/references/`; le risorse usate dal sito vanno in `public/`. Per il setup di base non servono servizi esterni o variabili d'ambiente.

## Verifiche

Eseguire `npm run typecheck` e `npm run build` dopo modifiche al codice. ESLint è disponibile tramite `npm run lint`.

## Documentazione tecnica

- [Next.js](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
