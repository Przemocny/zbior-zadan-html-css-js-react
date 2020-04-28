import React, {useState, useEffect} from 'react'

// zaprojektuj prosty komponent wg poniższych wytycznych do testów
const ButtonWithLoading = (
    {onClick, children, action}
)=>{
    // możesz przerobić na komponent klasowy
    return null
}

// zaprojektuj testy, w których upewnisz się, że powyższy komponent działa poprawnie

// komponent ButtonWithLoading działa poprawnie jeśli:
// - po wyrenderowaniu jest tagiem button
// - to co trafia do children jest w tagu button
// - jeśli nic nie ma w propsie children text buttona to "don't push my buttons"
// - kiedy button zostanie kliknięty wyświetli w buttonie text "loading..." oraz 
// - na kliknięciu wykona się promise przekazaną w propsie action
// - po wykonaniu się promisy poprawnie, text buttona zmienia się na "success"
// - po wykonaniu się promisy z błędem, text buttona zmienia się na "error"
// - po wykonaniu się promisy z dowolnym wynikiem jej zwrotka ląduje w propsie onClick
// - ***kiedy button zostanie kliknięty nie będzie można w niego ponownie kliknąć w czasie ładowania

// przykładowy action do tego zadania
const action = () => new Promise((resolve, reject)=>{
    const timer = setTimeout(()=>{
        cleanTimeout(timer)
        if(Math.round() > 0.5){
            resolve('success')
        }
        else{
            reject('error')
        }
    },2000)
})


