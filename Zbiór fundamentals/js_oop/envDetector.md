<h2 align="center">Opis zadania Env Detector </h2>

<br>

## Wymagana wiedza

- Solidne podstawy JS-a.
- Podstawy OOP
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Wytworzenie klasy **EnvDetector**, której wszystkie metody są statyczne(wytyczne do zadania znajdują się w kodzie poniżej)
* [ ] Klasa działa tylko na podstawie elementu **window** i wyrzuca error, jeśli window nie istnieje

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym jest obiekt **window** - https://stackoverflow.com/questions/10037145/some-help-understanding-window-object / https://www.bitdegree.org/learn/javascript-window

## Kawałek kodu dla lepszego początku!

```javascript
// ma metody, które zwracają:
// - wymiary okna oraz wymiary strony (pamiętaj, że zmieniają się one w przypadku window.resize)
// - typ urządzenia (mobile/tablet/laptop)
// - rodzaj przeglądarki uzytkownika (ie/edge/firefox/opera/chrome)
// - system operacyjny uzytkownika (ios/android/windows/linux/macos)
// - informację czy dane urządzenie posiada ekran dotykowy
// - informację czy dane urządzenie jest offline czy online

class EnvDetector {
    getBrowserSize(){}
    getWindowSize(){}
    getDeviceType(){}
    getOS(){}
    isTouchable(){}
    isOnline(){}
}
```
