const actions = {
  changeValue(state, { payload }) {
    return {
      ...state,
      ...payload,
    }
  },
  load(state, { payload }) {
    const { data } = payload
    return {
      ...state,
      ...data,
    }
  },
}

function reducer(state, action) {
  switch (action.type) {
    case "changeValue":
      return actions.changeValue(state, action)
    case "load":
      return actions.load(state, action)
  }
}

export default reducer
