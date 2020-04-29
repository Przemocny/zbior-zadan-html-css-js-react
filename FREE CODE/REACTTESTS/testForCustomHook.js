// przykładowe testowanie customowego hooka
import React, { useState, useEffect } from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
Enzyme.configure({ adapter: new Adapter() })

// tworzymy sobie jakiś hook
const usePartialState = (initialState) => {
	const [state, onChangeState] = useState(initialState)

	function onPartialChange(partialChange) {
		onChangeState({
			...state,
			...partialChange,
		})
	}

	return [state, onPartialChange]
}

// tworzymy specjalną closure do naszego przypadku:
// do testowania hooksów o strukturze odpowiadającej naszemu hookowi - [ data, setter ]

const ComponentForHooksTest = (testedHook) => ({
	initialState = { prop: 1, prop2: 'test' },
    partialState = { prop2: 'test2' },
    getHookData = () => false
}) => {
    const [data, setter] = testedHook(initialState)
    
    useEffect(()=>{
        if(data !== initialState){
            getHookData(data)
        }
    },[data])

	return (
		<button
			onClick={() => {
                setter(partialState)
			}}
		>
			change
		</button>
	)
}

describe('ComponentWithHooksToTest tests', () => {
	it('tests for custom hook', () => {
        // montujemy customowy hook
        const ComponentWithHook = ComponentForHooksTest(usePartialState)

        // mockujemy sprawdzanie stanu hooka
        const onChangeHookData = jest.fn()
        
		// montujemy komponent
        const component = mount(<ComponentWithHook getHookData={onChangeHookData} partialState={{prop2:'test15'}}/>)
        
		// łapiemy button do wyzwalania zmiany i klikamy w niego
		const button = component.find('button')
        button.simulate('click')

        // sprawdzamy czy funkcja się wywołała się z nowym stanem, poprawnym wg naszych założeń
		const [firstCallArgs] = onChangeHookData.mock.calls
        expect(firstCallArgs[0]).to.be.deep.equal({ prop: 1, prop2: 'test15' })
	})
})
