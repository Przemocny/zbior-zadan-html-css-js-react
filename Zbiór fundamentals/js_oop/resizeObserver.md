<h2 align="center">Opis zadania ResizeObserver </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming(OOP)
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Stwórz klasę ResizeObserver z metodami takimi jak zawiera pattern **Observera**
* [ ] ResizeObserver ma nasłuchiwać na globalnym **window.resize** oraz **window.onorientationchange**
* [ ] ResizeObserver ma w metodzie observe zamontować callback w nasłuchu na eventach **onresize** i **onorientationchange**
* [ ] W callbacku observe ma być zwracany obiekt z wartościami z window takimi jak - {outerHeight, outerWidth, innerHeight, innerWidth, orientation}
* [ ] ResizeObserver ma odmontować nasłuch na eventy po wywołaniu mentody **unobserve**

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym jest Observer pattern - https://medium.com/better-programming/the-observer-pattern-in-javascript-4f4e0b908d5e
- Czym jest obiekt window - https://stackoverflow.com/questions/10037145/some-help-understanding-window-object / https://www.bitdegree.org/learn/javascript-window

## Kawałek kodu dla lepszego początku!

```javascript
class ResizeObserver {
	constructor() {
        // ...
	}
	observe = (callback) => {
        // ...
	}
	unobserve = () => {
        // ...
	}
}
```
