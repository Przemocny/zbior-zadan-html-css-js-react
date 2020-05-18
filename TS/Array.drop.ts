
// Stwórz high order function arraya .drop w TS
// const arr = [0,1,2,'test',3,'7',11,'test']

// która będzie mieć 3 działania:
// kiedy dostaje wartość inną niż funkcja to działa tak:
// - arr.drop(2) => [0,1,'test',3,'7',11,'test']
// - arr.drop('test') => [0,1,2,3,'7',11]

// gdy dostaję typ prosty to działa tak:
// - arr.drop(Number) => ['test','7','test']
// - arr.drop(String) => ['test','7','test']

// gdy dostaję funkcję to działa tak:
// - arr.drop((element, idx) => boolean ) 

Array.prototype.drop = function(toDrop){
    // return ...
}