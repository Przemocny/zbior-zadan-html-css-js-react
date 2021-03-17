<h2 align="center">Hoc Protected View</h2>

<br>

## Wymagana wiedza

- JavaScript, React, 
- Redux, useReducer - opcjonalnie

## Technologie potrzebne do zadania

- JavaScript, React,

## Cele główne
* [ ] Twoim zadaniem jest stworzyć `userCtx` który w store przechowuje key `auth` domyślnie ustawiony na `false`
* [ ] Następnie, stwórz HOCa który zależnie od tego czy w store pojawi się `user.auth` = `true` zwraca null, jeśli false
to zwraca komponent przekierowujący na komponent logowania
## Cele dodatkowe
* [ ] Brak

## Przydatne linki
- context - https://pl.reactjs.org/docs/context.html

## Początek kodu
```javascript
// kontektst
const userCtx = React.createContext({auth:false})

//HOC
const Protected = (Component)=>{
    // return null
}
// - jeśli w kontekście auth jest false, Protected wyświetla komunikat "Musisz pierwsze się zalogować"
// - jeśli w kontekście auth jest true to Protected wyświetla komponent
```



