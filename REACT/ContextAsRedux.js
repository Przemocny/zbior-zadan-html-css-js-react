// Logika Reduxa w React składa się z 5 prostych elementów:
// - struktury danych - tzn store/state - komórka pamięci z aktualnym stanem wszystkich danych
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

const useContextState = ({stateNames=['text']})=>{
    // jeśli stateNames jest pusty to zwraca cały state
    // jeśli stateNames nie jest pusty to zwraca podane w arrayu klucze i wartości w formie nowego obiektu
    // return ...
}

const useContextActions = ({actions=["changeText"]})=>{
    // jeśli actions jest pusty to zwraca wszystkie akcje
    // jeśli actions nie jest pusty to zwraca akcje wskazane po nazwie w arryu actions
    // return ...
}

const useContextActionsAndStore = ({actions=["changeText"], stateNames=['text']})=>{
    // suma logiki powyżej
    // return ...
}
