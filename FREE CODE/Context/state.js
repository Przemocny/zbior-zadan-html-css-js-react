import React from "react"

const initialState = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  address_1: "",
  address_2: "",
  city: "",
  postcode: "",
  country: "",
  email: "",
  phone: "",
  note: "",
}

const StoreCtx = React.createContext({
  state: { ...initialState },
  actions: {
    changeValue(state, { payload }) {},
    loadCustomer(state, { payload }) {},
  },
})

export default {CartCtx, initialState} 
