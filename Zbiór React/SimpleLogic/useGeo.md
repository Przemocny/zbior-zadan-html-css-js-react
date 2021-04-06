<h2 align="center">Przykładowe zadanie ze zbiorow Gladiatorów Javascriptu. Kup nasze zbiory już dziś!</h2>
<h5 align="center">https://gladiators-of-javascript.com/#gladiators</h5>

<h2 align="center">useGeo hook</h2>

<br>

## Wymagana wiedza

- JavaScript, React


## Technologie potrzebne do zadania

- JavaScript, React

## Cele główne
* [ ] Stwórz custom hook `useGeo`, który dodaje do komponentu poniższe właściwości:
- `geoData` - zwraca wszystkie informacje geolokalizacyjne z window
- `toggleListening` - true/false - akcja, która przyjmuje true/false i włacza lub wyłącza nasłuch na geolokalizacji

* [ ] Sprawdź czy Twój hook działa poprawnie:
- zwraca poprawny typ danych = `[boolean, function]`
- włącza i wyłącza nasłuch na geolokalizacji
- zwraca latitude i longitude

* [ ] Zamockuj window oraz metody niezbędne do geolokalizacji ustawiając:
- defaultowo lat i long na Londyn
- ustawiając defaultowo nasłuch na wyłączony

## Cele dodatkowe
* [ ] Brak

## Przydatne linki
- latitude i longitude - https://www.latlong.net/
- Tworzenie własnych hooków - https://pl.reactjs.org/docs/hooks-custom.html

## Kawałek kodu na lepszy początek
```javascript
const useGeo = (ref) => {
  // return [geoData, toggleListening]
}
```

