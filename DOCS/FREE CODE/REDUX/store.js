// korzystając z @reduxjs/toolkit tworzymy "slice"
// https://redux-toolkit.js.org/
import { createSlice, configureStore } from '@reduxjs/toolkit'

// defaultowy stan stora
const initialState = {
	customer: {
		username: '',
		password: '',
		firstName: '',
		lastMame: '',
		address1: '',
		address2: '',
		city: '',
		postcode: '',
		country: '',
		email: '',
		phone: '',
		note: '',
	},
	imBusyPhrase:'initial'
}

// slice to taki element,
// który na podstawie stanu wejściowego
// oraz podpiętych akcji "robi całego reduxa za nas"

// createSlice zwraca nam akcje oraz reducer,
// których używamy w komponentach

const { customerActions = actions, customerReducer = reducer } = createSlice({

	// name to unikatowa nazwa dla danego slice
	name: 'Customer',
	initialState: initialState,

	// klucz reducers to akcje przypisane do stora i zmieniające go
	reducers: {
		changeValue(state, action) {
			// każda akcja ma w argumentach 
			// aktualny stan store zwany "state"
			// oraz wywołaną na nim akcję danego typu z payloadem
			const {key, value} = action.payload
			state.customer[key] = value
		},
		changeLoadingState(state, {payload}){
			state.imBusyPhrase = payload
		},
		
		loadCustomer(state, { payload }) {
			const { customer } = payload
			state.customer = customer
		},
	},
})

// jeśli mamy wiele storów to musimy je połączyć w jeden główny
// należy je połączyć w funkcji configureStore
const store = configureStore({
	reducer: {
		Customer: customerReducer,
		// Cart: cartReducer,
		// Search: searchReducer
	},
})

export { customerActions, customerReducer, store }
