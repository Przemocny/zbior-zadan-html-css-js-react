// stwórz customową parę atrybutów data-delayed-
// - ma występować TYLKO RAZEM i być tylko do tagów <a>
// - która będzie opóźniać przekierowanie NA INNY url o kilkaset milisekund
// - która wartością atrybutu data-delayed-href nadpisze aktualny href


// dodatkowo
// - wywołaj w czasie przed przekierowaniem funkcję
function onClick(event){
    console.log('kliknięte z opóźnieniem')
}


// kod html
// który powienien zadziałać w taki sposób:
// - odpalić timout na 300ms
// - wyświetlić w konsoli 'kliknięte z opóźnieniem' 
// - po 300ms przekierować na /contact

<a data-delayed-href="/contact" data-delayed-duration="300">Contact me</a>





