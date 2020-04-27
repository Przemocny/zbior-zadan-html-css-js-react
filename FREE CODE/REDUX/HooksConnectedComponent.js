import React, {useMemo} from 'react'
import { bindActionCreators } from 'redux'
import { customerActions } from './store'

import { shallowEqual, useSelector, useDispatch } from 'react-redux'

// ten hook łączy wszystkie akcje z danego reducera, tak aby dało się je wywołać
const useAllActions = (actionsAsObj)=>{
    const dispatch = useDispatch()
    return useMemo(
        () => bindActionCreators(actionsAsObj, dispatch),
        [dispatch]
      )
}

// ten hook łączy niektóre akcje z danego reducera, tak aby dało się je wywołać
// używać zamiennie
const useSomeActions = (actionsAsArray)=>{
    const dispatch = useDispatch()
    return useMemo(
        () => actionsAsArray.map( action => bindActionCreators(action, dispatch) ),
        [dispatch]
      )
}

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