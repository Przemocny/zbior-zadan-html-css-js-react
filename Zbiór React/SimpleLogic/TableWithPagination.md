<h2 align="center">Table With Pagination</h2>

<br>

## Wymagana wiedza

- JavaScript, React


## Technologie potrzebne do zadania

- JavaScript, React

## Cele główne
* [ ] Stwórz komponent `PaginatedTable`, który będzie renderował paginowaną tabelkę na podstawie danych przekazanych do propsa `dataEntries` - wygenerowanych przez Ciebie danych.
* [ ] Stwórz komponent `Pagination` który będzie renderował wszystkie przyciski do zmiany stron
* [ ] Stwórz hook `usePagination(dataEntries, elementsOnPage)` który zwraca poniższe dane:
```javascript
const [
	{ actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy },
	{ goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage }
] = usePagination(dataEntries)
// actualPageIdx to index aktualnej strony
// lastPageIdx to index ostatniej strony
// entriesOnSelectedPage to przy elementsOnPage = 50 zawiera 50 elementów z dataEntries dla aktualnej strony
// isBusy - boolean true/false, defaultowo false, który jest włączony na 333ms podczas gdy zmieniana jest strona i wyświetlane są nowe dane

// goToPage(pageIdx) - zmienia daną stronę
// goToFirstPage, goToPrevPage, goToNextPage, goToLastPage - zmienia stronę na odpowiednią
```

## Cele dodatkowe
* [ ] Brak

## Przydatne linki

- Tworzenie własnych hooków - https://pl.reactjs.org/docs/hooks-custom.html

## Kawałek kodu na początek
```javascript
const PaginatedTable = ({ dataEntries }) => {
	// ...
	return null
}

const Pagination = ({ paginationState, paginationActions })=>{
    
}
const usePagination = (dataEntries, elementsOnPage=50) => {
    // ...
    // return [paginationState, paginationActions]
}
```



