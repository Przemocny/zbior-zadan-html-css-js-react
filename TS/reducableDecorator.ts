// napisz funkcję reducableDecorator, która będziesz używać wzorca Dekorator, 
// aby dodać do klasy Object metodę .reduce
// materiały https://fsgeek.pl/post/dekoratory-w-typescript/

const reducableDecorator = (target)=>{}

const ObjectWithReduce = reducableDecorator(Object)
const object = new ObjectWithReduce({ value: "test" })

const clone = object.reduce((key, value)=>{
    return { [key] : value }
    // jeśli nic nie jest zwracane w callbacku reduce
    // to dany klucz nie wchodzi do zwrotki
})

// clone == object
// clone !== object