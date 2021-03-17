// Zrób apkę tylko na urządzenia z geolokalizacją z mapą google lub inną

// WhoLetDeDogosOut

// Wstaw w nią 2 markery:
// - jeden to Pani/Pan - czyli pozycja telefonu (Ty)
// - drugi to Twój Pies


// Jak Pies mogłby działać:
// - Psa powinno puszczać się wolno (chodzić w tempie 2m/sek)
// - Psa powinno się przywoływać do siebie (biec w tempie 8m/sek)
// - Pies nie powinnien się oddalać się dalej niż 200 metrów od Ciebie
// - Pies powienien chodzić w punktu do punktu w Twoim obszarze


// Możesz podejść do tego problemu w taki sposób:
// - możesz stworzyć klasę Dog i Player, w której będziesz mógł dodawać i odejmować parametry oraz metody
// - możesz stworzyć klase Environment w której w zależności od GPS będziesz zmieniać markery klasy Player i Dog na mapie
// - możesz użyć webworkera do rekalkulacji danych na widoku względem siebie
// - możesz użyć gotowych ikonek jako markerów dla siebie i psa
// *** - możesz pomyśleć, jak zaprosić kogoś do gry - możesz wykorzystać do tego socket.io ;)


// Potrzebujesz w tej aplikacji 2 widoki

// Widok mapy:
// - widok pokazuje mapę 
// -- z 2 markerami 
// -- i narysowaną ścieżką, która pokazuje którędy przeszedłeś od czasu włączenia apki


// Widok podsumowania:
// - drugi widok to podsumowanie spaceru - ile km zrobiłeś Ty, na jakim obszarze spacerowałeś, ile km zrobił pies