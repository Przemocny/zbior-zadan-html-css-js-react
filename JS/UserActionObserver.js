// Stwórz observera, który będzie nasłuchiwać 
// na wszystkie <a></a> i <button></button> dostępne w tagu <body></body>

// Działanie nr 1:
// po wykonaniu kliknięcia observer
// pozwoli na wykonanie callbacka dla klikniętego elementu


// Działanie nr 2:
// po wykonaniu kliknięcia observer
// observer będzie wiedział kiedy kliknięcie jest linkiem na podstronę lub na link z zewnątrz
// jeśli to wystąpi to w callbacku redirect będzie true 

// observer będzie wiedział kiedy kliknięcie nie spowoduje przekierowania, tylko np otworzenie modala lub link do #id
// jeśli to wystąpi to w callbacku redirect będzie true 


const callback = ({element, redirect})=>{
    console.log(element.innerHTML, redirect)
}


class UserActionObserver {
    constructor(options){
        this.entries = []
    }
    observe = (target)=>{

    }
    unobserve = (target)=>{
       
    }
    notifyAll = (callback)=>{
        
    }
}

