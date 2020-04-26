import React from 'react'
import { connect } from 'react-redux'
import { cartActions } from './store'

// komponent reacta nie podpięty
const NotConnectedComponent = (props)=>{
    return (<div>it will be connect to redux</div>)
}
// jak będzie podpięty to będzie mieć props.customer 
// identyczny jak ten store co jest w ./store.js


// Jak podpiąć:

// mapujemy nasz główny store do propsów komponentu
// pod mainStore.Customer mamy nasz przykłodowy store
// trafia on do komponentu poprzez props.customer
const mapStateToProps = (mainStore) => {
	return { customer: mainStore.Customer }
}

// mapujemy nasze akcje do propsów komponentu
// poniższy zapis bierze wszystkie akcje z cartActions
// i wrzuca je bezpośrednio do props

const mapActionToDispatch = { ...cartActions }


// używamy HOCa connected łącząc reguły, które stworzyliśmy 
// z komponentem w którym chcemy używać reduxa
const ConnectedComponent = connect(mapStateToProps, mapActionToDispatch)(NotConnectedComponent)


// eksportujemy niezależnie działający komponent
export default ConnectedComponent