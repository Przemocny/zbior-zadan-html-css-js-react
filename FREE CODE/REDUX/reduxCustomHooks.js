import {useMemo} from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

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

export { useAllActions, useSomeActions }