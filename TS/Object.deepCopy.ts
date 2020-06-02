
// Stwórz .deepCopy dla klasy Object w TS
// const obj = {test:'value'}

// jeśli zrobimy
// const obj2 = obj.deepCopy()

// to obj2 będzie mieć wartość {test:'value'}
// ale obj === obj2 da false

Object.prototype.deepCopy = function(){
    // return ...
}