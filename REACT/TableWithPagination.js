// Treść zadania - Paginowana tabelka

// Stwórz komponent PaginatedTable o poniższej strukturze, 
// w którym będzie renderowana paginowana tabelka z wygenerowanymi przez Ciebie danymi
const PaginatedTable = ({ dataEntries }) => {
	// ...
	return null
}

// oraz komponent Pagination w którym są wszystkie przyciski do zmiany stron
// komponent ma przyciski umożliwiające 
const Pagination = ({ paginationState, paginationActions })=>{}

// oraz hook usePagination(dataEntries, elementsOnPage)
const usePagination = (dataEntries, elementsOnPage=50) => {
    // ...
    // return [paginationState, paginationActions]
}

// który zwraca poniższe dane
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

