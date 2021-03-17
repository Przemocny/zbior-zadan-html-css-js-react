// Stwórz wg wzorca Fasady klasę GeoFacade, która:
// - służy, aby uprosćić sobie myślenie o nawigacji
// - przyjmie w construktorze niezbędne propy z window
// - askPermissionForLocation - spowoduje zapytanie klienta o zgodę na namierzanie, w razie braku zgody nic sie nie dzieje
// - watch - pozwala na nasłuch nowych danych o pozycji w callbacku nextPositionCallback
// - unwatch - wyłącza nasłuch

// materiały
// https://refactoring.guru/design-patterns/facade/typescript/example#example-0


class GeoFacade{
    constructor(){}
    askPermissionForLocation(){}
    watch(nextPositionCallback){}
    unwatch(){}
}