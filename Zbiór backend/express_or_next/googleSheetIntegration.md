<h2 align="center">Google sheet integration</h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Asynchroniczność(promise, async/await).
- Podstawowa wiedza z zakresu frontendu(budowa formularza).
- Podstawowa wiedza z zakresu połączenia z usługą google sheet i google drive
 
## Technologie potrzebne do zadania

- Express.js lub Next.js.

## Cele główne

* [ ] Przygotowanie integracji do google sheets, które będą swoistą bazą danych dla informacji z formularza na stronie(jeśli formularza zawiera imie, naziwsko, e-mail to arkusz google sheets powinien zawierać wszystkie dane z formulrza jako kolumny)
* [ ] Stwórz możliwośc uploadu plików przez formularz na google drive. Do google sheets z informacja do tego formularza ma trafiać link do google drive(jedno kliknięcie aby ściągnąć)
* [ ] Każdy wypełniony formularz ma mieć swój identyfikator i datę utworzenia(timestamp), każdy formularz ma mieć powiązane IP z osobą wysyłająca
* [ ] Każdy formularza powinien mieć podstawową walidacje zarówno po stronie frontendu jak i backendu

## Cele opcjonalne do wykonania

* [ ] Na podstawie IP z formularza dokonaj geolokalizacji osoby wysyłającej

## Przydatne linki

- Przykład integracji node z google sheets - https://dev.to/osumgbachiamaka/how-to-build-an-api-with-nodejs-expressjs-and-google-sheet-1-45gf
- Przykład budowy formularzy w HTML - https://www.htmlgoodies.com/html5/css/working-with-html-forms.html

## Kawałek kodu dla lepszego początku!

```javascript
// część backendowa opowiedzialna za wysyłkę plików.

const router = express.Router()

router.post('/upload', (req,res) =>{

  // ... logika obsługująca wysyłkę plików

})
//
// częśc frontendowa(potzebujemy jedynie formularza)


<form method="POST" action="/upload" enctype="multipart/form-data">
  input ...
```
