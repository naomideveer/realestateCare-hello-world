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

---

## Projectstructuur

- `src/components` — herbruikbare UI-componenten
- `src/views` — paginacomponenten gekoppeld aan routes
- `src/services` — API-communicatie via Axios
- `src/models` — datamodellen
- `src/stores` — Pinia stores voor state management
- `src/assets` — globale stijlen
- `db.json` — mockdata voor MyJSONServer

---

## Live demo

http://realestate-care.netlify.app

Inloggegevens voor de demo:

- Gebruikersnaam: `inspector`
- Wachtwoord: `test123`

---

## Verantwoording

### Security

De applicatie maakt gebruik van een gesimuleerd inlogsysteem via `localStorage`,
zoals beschreven in de technische case. Dit is uitsluitend bedoeld voor demonstratiedoeleinden.

De volgende beveiligingsmaatregelen zijn getroffen:

- **Route guard**: alle routes zijn beveiligd via een `beforeEach` guard in de router.
  Niet-ingelogde gebruikers worden automatisch doorgestuurd naar het loginscherm.
- **Uitlogfunctionaliteit**: de gebruiker kan uitloggen via de uitlogknop in de header,
  waarbij de sessie uit `localStorage` wordt verwijderd.
- **Geen gevoelige data in de broncode**: API-sleutels of wachtwoorden staan niet hardcoded in de broncode.

In een productieomgeving zou dit vervangen worden door een echte authenticatieservice met JWT-tokens en HTTPS.

---

### Usability — 10 heuristieken van Jacob Nielsen

1. **Zichtbaarheid van systeemstatus**: De badge op de "Toegewezen" tegel toont het actuele aantal openstaande inspecties.
   Foutmeldingen worden getoond via `v-alert` componenten.
2. **Overeenkomst tussen systeem en de echte wereld**: De applicatie gebruikt Nederlandse termen die aansluiten bij de werkwijze van inspecteurs.
3. **Gebruikerscontrole en vrijheid**: De gebruiker kan via de tabbar en het logo altijd terug naar het dashboard navigeren.
4. **Consistentie en standaarden**: De UI is consistent opgebouwd met Vuetify-componenten. Kleuren en spacing zijn vastgelegd in `main.css` via CSS-variabelen.
5. **Foutpreventie**: Bij een verkeerde inlogcombinatie verschijnt een duidelijke foutmelding.
6. **Herkennen boven herinneren**: Navigatie is altijd zichtbaar via de tabbar en het dashboard. Iconen ondersteunen de tekst.
7. **Flexibiliteit en efficiëntie**: De inspecteur kan snel navigeren via de tabbar of de dashboard-tegels.
8. **Esthetisch en minimalistisch ontwerp**: Elke pagina toont alleen relevante informatie.
9. **Hulp bij het herkennen en herstellen van fouten**: Foutmeldingen zijn duidelijk geformuleerd in begrijpelijke taal.
10. **Hulp en documentatie**: De kennisbase biedt toegang tot relevante documenten zoals normbladen en testprocedures.

---

### Accessibility — WCAG 2.1 niveau A

**Wat is geïmplementeerd:**

- Afbeeldingen hebben een `alt`-attribuut.
- Formuliervelden hebben labels via Vuetify.
- Kleurcontrast tussen de primaire kleur (#293439) en witte tekst voldoet aan WCAG AA.

**Wat nog ontbreekt:**

- Volledige toetsenbordnavigatie is niet getest.
- ARIA-labels voor iconen in de tabbar zijn niet volledig geïmplementeerd.
- Een formele WAVE-test is nog niet uitgevoerd.

---

### Style guides en best practices

- **Component-based architecture**: herbruikbare componenten zoals `DashboardCard`, `CompletedInspections` en `InspectionDetail`.
- **Scheiding van verantwoordelijkheden**: data-ophaling in een aparte service, state management in Pinia, datamodellen in aparte modelbestanden.
- **Geen inline stijlen**: alle stijlen zijn verplaatst naar `main.css` met CSS-variabelen.
- **Asynchroon programmeren**: API-calls worden asynchroon uitgevoerd met `async/await` en voorzien van error handling via `try/catch`.
- **Naamgeving**: bestanden en variabelen volgen de Vue-stijlgids (PascalCase voor componenten, camelCase voor variabelen).
