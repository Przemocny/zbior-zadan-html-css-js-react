// Jest to zadanie demko ze zbioru:
// - Nieprzewidziane i sprawiające problemy testy w JAVASCRIPT i REACT


// zbuduj metodę searchOnFields, która:
// - przeszukuję argument data, który jest arrayem zagnieżdzonych n-poziomowych obiektów
// - przeszukuję jeśli argument phrase ma co najmniej 3 litery, zwracając wyniki alfabetycznie
// - przeszukuje we wszystkich polach w każdym obiekcie arraya, jeśli typ jest uwzględniony w argumencie conditions

// możesz korzystać z lodasha

const stringsAndNumbers = ['string','number']

function searchOnFields(data, phrase, conditions=stringsAndNumbers){
    // ...
}

// przetestuj use casy:
// nie szukaj jeśli nie będzie 3 liter
// chcę przeszukać tylko w polach typu number
// chcę przeszukać tylko w polach typu string
// chcę zobaczyć error jeśli data nie będzie typu array
// chcę zobaczyć error jeśli conditions nie będzie zawierać typów prostych
// chcę zobaczyć wyniki alfabetycznie

// dodatkowo:
// coś musi się dziać kiedy nie ma nic conditions - wymyśl co



