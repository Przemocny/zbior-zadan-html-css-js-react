// główny plik aplikacji lub jeden z głównych komponentów obsługujących layout
import React from 'react'

// zaciągamy Providera z react-redux
import { Provider } from 'react-redux'

// importujemy store z naszego pliku ze storem reduxa
import store from './store'

// tutaj jest komponent główny aplikacji
const App = ()=>{
    return <div>Your app, views, router, menus, more</div>
}

// wrappujemy Providerem naszą apkę jednoczenie wrzucają do niego store
export default ()=> 
    <Provider store={store}>
        <App/>
    </Provider>