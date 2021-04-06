<h2 align="center">Przykładowe zadanie ze zbiorow Gladiatorów Javascriptu. Kup nasze zbiory już dziś!</h2>
<h5 align="center">https://gladiators-of-javascript.com/#gladiators</h5>

<h2 align="center">Opis testów do zadania request </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawowa znajomość testów z użyciem Jest
- Asynchroniczność

## Technologie potrzebne do zadania

- Typescript
- Jest
- Axios

## Cele główne

* [ ] Korzystając z biblioteki axios i jej typów przetestuj tą instancję, mockując odpowiednie klasy
* [ ] Możesz wysłać zapytanie na adres GET /next?q=error
* [ ] Możesz obsłużyć błąd typu 500 oraz 404
* [ ] Możesz wysłać plik na POST /file
* [ ] Jeśli w config.query wejdzie {"key":"value"} to dawać url z końcówką ?key=value
* [ ] Możesz obsłużyć błąd spowodowany timeoutem

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Dokumentacja Axios - https://github.com/axios/axios
- Dokumentacja Jest - https://jestjs.io/docs/en/getting-started
- Czym jest Mock - https://stackabuse.com/using-mocks-for-testing-in-javascript-with-jes/

## Kawałek kodu dla lepszego początku!

```javascript
import axios from 'axios'
import querystring from 'query-string'

// możesz modyfikować i ulepszać instancję axiosa, aby wykonać to zadanie
const instance = axios.create({
  baseURL: 'https://base-url.com/api/',
  timeout: 1000 * 60,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// staraj się nie modifykować abstrakcji request
export const request = (_url, _config = {}) => {
  let req = {
    url: _url,
    ..._config
  }
  if (!req.headers) {
    req.headers = {}
  }
  if (_config.multipart) {
    req.headers['content-type'] = 'multipart/form-data'
  }

  if (_config.query && Object.keys(_config.query).length !== 0) {
    req.url += '?' + querystring.stringify(_config.query, { arrayFormat: 'bracket' })
  }

  return instance
    .request(req)
    .then((data) => {
      return data.data
    })
    .catch((err) => {
      const { data, status } = err.response
      return Promise.reject({ data, status })
    })
}
```
