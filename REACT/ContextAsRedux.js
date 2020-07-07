// Logika Reduxa w React składa się z 5 prostych elementów:
// - struktury danych - tzn store
// - reducera, który agreguje akcje i zmienia wg nich aktualny stan store
// - akcji z dodatkowymi danymi wykonywanych na reducerze do modyfikacji store
// - Providera - który określa zakres działania Reduxa
// - HOCa connect - High Order Component, który tworzy Consumera stanu z danego komponentu

// Za pomocą:
// - React ContextApi
// - useContext hook
// - useReducer hook
// - oraz odrobiny znajomości JS 

// na podstawie poniższego kodu
// odtwórz Reduxa w React ContextApi
const initialState = {
    text:'treść'
}

const ctx = React.createContext({
    state: initialState,
    actions:{
        changeText:(state, action)=>{}
    }
})

const actions = {
    changeText:(state, action)=>{
        // return ...
    }
}

function reducer(state=initialState, action){
    // zwykły reducer
    // return ...
}

const Provider = ({children, onLoad, onChange}) => {
    // tutaj łączymy context i actions i wrzucamy je do providera
    // prop onLoad powinien wywołać się na wczytaniu komponentu
    // prop onChange powinien wywołać się na zmianie stanu
    // return ...
}

const StateConsumer = ({children, state=['text']})=>{
    // tutaj komponenty children dostają w propsach "state" ze store.stateKey
    // jeśli stateKey jest pusty to zwraca cały state
    // return ...
}

const ActionConsumer = ({children, actions=["changeText"]})=>{
    // tutaj komponenty children dostają w propsach actions wskazane po nazwie w propie actions
    // jeśli actions jest pusty to zwraca wszystkie akcje
    // return ...
}

const Consumer = ({children, actions=["changeText"], state=['text']})=>{
    // suma komponentów wyżej
    // return ...
}
