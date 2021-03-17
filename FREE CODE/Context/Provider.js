import React, {
  useReducer,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react"
import Ctx from "./ctx"
import initialState from "./state"
import actions from "./actions"

const Provider = ({
  children,
  onLoad = () => false,
  onStateChange = () => false,
}) => {
  const [state, dispatch] = useReducer(actions, initialState)

  useLayoutEffect(() => {
    onLoad(dispatch)
  }, [])

  useEffect(() => {
    console.log("Provider state ", state)
    onStateChange(state)
  }, [state])

  return (
    <Ctx.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Ctx.Provider>
  )
}

export { Provider, Ctx }
