// jeśli w storze pojawi się user.auth na true to zwraca null,
// a jeśli nie to zwraca komponent przekierowujący na komponent logowania


// na podstawie tego kontekstu
const userCtx = React.createContext({auth:false})

// Stwórz HOCa Protected używając useContext
const Protected = (Component)=>{
    // return null
}

// który działa w następujący sposób:
// - jeśli w kontekście auth jest false, Protected wyświetla komunikat "Musisz pierwsze się zalogować"
// - jeśli w kontekście auth jest true to Protected wyświetla komponent

// to ćwiczenie możesz wykonać zarówno z użyciem Reduxa i hooka useReducer
