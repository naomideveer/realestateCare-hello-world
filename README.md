# RealEstateCare

RealEstateCare is een webapplicatie gebouwd met Vue 3 en Vite. De applicatie is bedoeld om vastgoed op een overzichtelijke manier te bekijken en te beheren. Gebruikers kunnen woningen inzien en navigeren door verschillende onderdelen van de applicatie.

Dit project is gemaakt als onderdeel van een front-end development opleiding, waarbij gewerkt wordt met component-based development in Vue.

---

## Gebruikte technologieën

- Vue 3
- Vite
- Vuetify 3 (UI framework)
- Pinia (state management)
- Axios (HTTP client)
- JavaScript (ES6+)
- HTML5
- CSS3

---

## Project Setup

Installeer de benodigde packages:

```sh
npm install
```

### Development starten

```sh
npm run dev
```

### Productie build maken

```sh
npm run build
```

### Lint met [ESLint](https://eslint.org/)

```sh
npm run lint
```

---

## API

De inspectiedata wordt opgehaald via MyJSONServer:
https://my-json-server.typicode.com/naomideveer/realestateCare-hello-world/inspections

--

## Projectstructuur

- `src/components` — herbruikbare UI-componenten
- `src/views` — paginacomponenten gekoppeld aan routes
- `src/services` — API-communicatie via Axios
- `src/models` — datamodellen
- `src/stores` — Pinia stores voor state management
- `src/assets` — globale stijlen
- `db.json` — mockdata voor MyJSONServer
