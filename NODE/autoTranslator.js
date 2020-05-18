// to są dane językowe Twojej apki
// załóżmy, że zaciągasz te dane z bazy
const pl = {
    attention:{
        title:'Dobrze, że jesteś, sprawdź to zadanie',
        subtitle:'Pomoże Ci ogarnąć jak zmieniać język w apkach reacta',
        ctaButton:'Dowiedź się więcej',
    },
    newsletter:{
        title:'Bądź na bieżąco',
        ctaButton:'Idź do repo ->',
        action:'/new-subscriber?lang=pl'
    }
}


// do endpointa leci sobie takie requestBody
const requestBody = {
    lang:'en'
}


// stwórz logikę, która w tym endpoint obrazowanym funkcją translate wykona:
// - pobranie wszystkich danych językowych
// - przetłumaczenie ich poprzez API google translate na język podany w requestBody 
// -- link do dokumentacji - https://cloud.google.com/translate/docs/reference/rest/v2/translate
// - zapis wszystkich danych we wskazanym języku w formie pliku js o nazwie tego języka (dla angielskiego będzie to en.json)
// - w response zwróci kompletny obiekt z tekstami

// cache:
// - jeśli przy zapytaniu o tłumaczenie na język angielski istnieje już plik en.json to jego zawartość jest zwracana w response

function translate(request, response){

}

export default translate