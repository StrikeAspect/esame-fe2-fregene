# Movie App (`esame-fe2-fregene`)

Applicazione React + TypeScript + React Router realizzata per la prova di fine modulo, basata sulle API di TMDB e sul prototipo in `traccia/prototipo/`.

## Struttura del progetto

- `index.html` - Pagina HTML principale con il contenitore `#root`.
- `src/main.tsx` - Punto di ingresso con `BrowserRouter` e importazione di `styles.css`.
- `src/App.tsx` - Configurazione delle due rotte figlie di `Shell` (`/` e `/movies/:id`).
- `src/styles.css` - Fogli di stile basati sul wireframe originale.
- `src/types/movie.ts` - Tipi TypeScript (`MovieDetail` da Appendice A, `MovieSummary`, `MovieSearchResponse` e interfacce `Props`).
- `src/components/Header.tsx` - Intestazione con brand e link alla home.
- `src/components/Shell.tsx` - Layout condiviso con `Header` e `<Outlet />`.
- `src/components/MovieCard.tsx` - Singola scheda film nell'elenco.
- `src/components/Poster.tsx` - Locandina TMDB con fallback testuale `Poster`.
- `src/pages/MovieListPage.tsx` - Elenco fisso dei film di *The Lord of the Rings* (pagina 1, max 20 risultati).
- `src/pages/MovieDetailPage.tsx` - Scheda dettaglio del film selezionato tramite `id`.
- `traccia/` - Traccia ufficiale e prototipo HTML/CSS statico di riferimento.
- `M9_scheda-componente-semplificata_Rev-Ramson Fregene.docx` - Scheda di progettazione dei componenti.

## Come inizializzare e avviare il progetto

1. Spostarsi nella cartella del progetto e installare le dipendenze:

```bash
npm install
```

2. Creare un file `.env` nella root del progetto e inserire la propria API Key TMDB:

```env
VITE_TMDB_API_KEY=la_tua_api_key_tmdb
```

3. Avviare il server di sviluppo locale:

```bash
npm run dev
```

4. Per verificare la compilazione TypeScript e la build finale:

```bash
npm run build
```