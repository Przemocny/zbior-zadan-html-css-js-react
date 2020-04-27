import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useAllActions, useSomeActions } from './reduxCustomHooks'
import { customerActions } from './store'


// komponent reacta z hookami
const ConnectedComponent = (props) => {
    const customer = useSelector(({Customer}) => Customer.customer, shallowEqual) 
    const {changeValue} = useAllActions(customerActions)
    // lub 
    // const [changeValue] = useSomeActions([customerActions.changeValue])
    return (<div>it connected to redux</div>)
}

// eksportujemy niezależnie działający komponent
export default ConnectedComponent