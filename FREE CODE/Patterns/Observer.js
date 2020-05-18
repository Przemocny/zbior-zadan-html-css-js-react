// callback, który wykonuje się na każdej zmianie
const callback = (entries)=>{
    // entries to wszystkie elementy podpięte do observera
}

class ObserverPattern {
    constructor(callback, options){
        this.entries = []
    }
    observe = (target)=>{
        // miejsce do podłączenia np listenera na dany element target lub innej logiki nasłuchującej na zmianę/event
    }
    unobserve = (target)=>{
        // miejsce do odłączenia np listenera na dany element target lub innej logiki nasłuchującej na zmianę/event
    }
}

