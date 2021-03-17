<h2 align="center">Bearer token middleware</h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Asynchroniczność(promise, async/await).
- Podstawowa znajomość mechaniznów zabezpieczenia "bearer-token".
- Podstawowa znajmość jednej z nizej wymienionych baz danych.
 
## Technologie potrzebne do zadania

- Express.js lub Next.js.
- mongoDB/PostgreSQL/Redis

## Cele główne

* [ ] Na postawie tokenów przekazywanych w **Request Headers** oraz jednej dowolnej bazy danych **(mongo/sql/redis)** weryfikuj czy dany request jest zawiera poprawny token.
* [ ] Jeśli request nie zawiera odpowiedniego **tokenu**, to response powinien zwracać odpowiedni komunikat i status

## Cele opcjonalne do wykonania

- Brak

## Przydatne linki

- Czym są middleware w express - https://developer.okta.com/blog/2018/09/13/build-and-understand-express-middleware-through-examples
- Czym są bearer tokeny - https://stackoverflow.com/questions/25838183/what-is-the-oauth-2-0-bearer-token-exactly/25843058

## Kawałek kodu dla lepszego początku!

```javascript
function bearerTokenMiddleware(){
// ...
}

// aby użyć to tak w expressie
const server = express()
server.use(bearerTokenMiddleware)
```
