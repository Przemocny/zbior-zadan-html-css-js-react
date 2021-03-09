<h2 align="center">Opis zadania PromiseMethods </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Asynchroniczność
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Wypracuj funkcje, które odwzorowują działanie metod promisowych + według mnie promisy powinny posiadać jeszczę dwie dodatkowe metody(Wszystko opisane dokładniej poniżej w kodzie)
* [ ] Wypracowanie funkcji **promise.all(arrayOfPromises)**
* [ ] Wypracowanie funkcji **promise.race(arrayOfPromises)**
* [ ] Wypracowanie funkcji **promise.last(arrayOfPromise)**
* [ ] Wypracowanie funkcji **promise.ignoreErrors(arrayOfPromise)**

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Wszystko o promisach - https://medium.com/better-programming/understanding-promises-in-javascript-13d99df067c1

## Kawałek kodu dla lepszego początku!

```javascript
// Promise.last(arrayOfPromise) - zwraca do then tylko ostatnią promisę, która się wykonała asynchronicznie, 
// a jeśli wystąpił błąd w co najmniej jednej promisę, zwraca do catch ten błąd po ukończeniu ostatniej promisy

// Promise.ignoreErrors(arrayOfPromise) - nie ważne co się stanie, 
// zwracane są tylko te wyniki promise, które zakończyły się sukcesem, błędy są ignorowane


// skopiuj identyczne działanie tych metod w funkcjach
const promiseAll = (arrayOfPromise) => {
    return new Promise((resolve, reject)=>{
        // ...
    })
}

const promiseRace = (arrayOfPromise) => {
    return new Promise((resolve, reject)=>{
        // ...
    })
}

const promiseLast = (arrayOfPromise) => {
    return new Promise((resolve, reject)=>{
        // ...
    })
}


const promiseIgnoreErrors = (arrayOfPromise) => {
    return new Promise((resolve, reject)=>{
        // ...
    })
}
```
