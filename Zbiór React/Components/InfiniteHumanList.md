<h2 align="center">Infinite Human List</h2>

<br>

## Wymagana wiedza

- React, JavaScript


## Technologie potrzebne do zadania

- React, JavaScript

## Cele główne
* [ ] Twoim pierwszym zadaniem jest stworzyć na potrzeby zadania zbiory (tablice) losowych imion, nazwisk, wieków, i płci - około 15 dla każdego zbioru, z wyjątkiem płci. Zbiory te posłużą jako dane do generowania w dalszej częsci zadania.

* [ ] Na podstawie przygotowanych zbiorów, stwórz funkcję `generatePerson`, która generuje człowieka jako obiekt o losowych parametrach. Jedna osoba to:
- imię, nazwisko, wiek, płeć (losowe)
- twarz, która będzie losowo wygenerowana przez AI - sprawdź: https://www.thispersondoesnotexist.com

* [ ] Stwórz listę 100 losowych osób
* [ ] Stwórz komponent `SinglePerson`, który prezentuje wszystkie informacje o człowieku
* [ ] Stwórz komponent `MoreAndMorePeople`, który zaprezentuje pierwsze 10 osób, oraz:
- po doscrollowaniu do końca listy, załaduje kolejne 10 osób do już prezentowanych
- jeśli pierwsza 100 osób z domyślnej listy którą stworzyłeś i przekazałeś w propsach się skończy, lista ma wygenerować kolejne 10 osób i je wyświetlić

## Cele dodatkowe

* [ ] Dodać stylowanie wg. metodologi BEM, w celu lepszego użytkowania.

## Kawałek kodu dla lepszego początku!

```javascript
const generatePerson = () => {}
// stwórz funkcję generuje człowieka (jako obiekt) o losowych parametrach

const people = [] // stwórz listę 100 ludzi

// stwórz komponent, który prezentuje wszystkie informacje o człowieku
const SinglePerson = (props)=>{
    return null
}

// stwórz listę, która zaprezentuje pierwszych 10 ludzi
const MoreAndMorePeople = ({
    items
}) => {
    // po doscrolowaniu do końca listy, lista ma załadować
    // kolejną dziesiątkę ludzi do pokazywanych
    // jeśli pierwszych 100 ludzi (podstawowa wartość propa 'items') się skończy
    // lista ma wygenerować świeżych 10 ludzi i ich pokazać
    return null
}
```




