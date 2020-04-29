// przykładowe testowanie komponentu z hooksami
import React, { useState, useEffect } from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
Enzyme.configure({ adapter: new Adapter() })

// różnice w shallow,mount,render:
// https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913
// https://enzymejs.github.io/enzyme/docs/api/

// jakiś po swojemu działający komponent z hookami
const ComponentWithHooksToTest = ({
	onClick = () => false,
	onCustomEvent = () => false,
}) => {
	const [text, onChange] = useState('test1')

	useEffect(
		() => {
			if (text === 'test2') {
				onCustomEvent('do something')
			}
		},
		[text]
	)

	return (
		<button
			onClick={() => {
				onChange(text === 'test2' ? 'test1' : 'test2')
				onClick(text)
			}}
		>
			{text}
		</button>
	)
}

// test input component with hook
describe('ComponentWithHooksToTest tests', () => {
	it('tests for state of component', () => {
		// sprawdzamy jak komponent działa w zależności od stanu
		// mockujemy funkcje do propsów
		const onClick = jest.fn()
		const onCustomEvent = jest.fn()

		// montujemy komponent
		const component = mount(
			<ComponentWithHooksToTest
				onClick={onClick}
				onCustomEvent={onCustomEvent}
			/>
		)

		// łapiemy button i klikamy w niego
		const button = component.find('button')
		button.simulate('click')

		// sprawdzamy czy funkcja się wywołała i wartość zależna od stanu się zmieniła
		expect(button.text()).to.be.equal('test2')
		expect(onClick.mock.calls.length).to.be.equal(1)

		// klikamy ponownie
		button.simulate('click')

		// sprawdzamy czy funkcja się wywołała i wartość zależna od stanu się zmieniła
		expect(button.text()).to.be.equal('test1')
		expect(onClick.mock.calls.length).to.be.equal(2)

		// sprawdzamy czy funkcja onClick wywołała się z odpowiednimi parametrami
		const [firstCallArgs, secondCallArgs] = onClick.mock.calls
		expect(firstCallArgs[0]).to.be.equal('test1')
		expect(secondCallArgs[0]).to.be.equal('test2')
	})

	it('useEffect onCustomEvent test', () => {
		// sprawdzamy jak komponent działa z użyciem useEffect
		const onClick = jest.fn()
		const onCustomEvent = jest.fn()

		// montujemy komponent
		const component = mount(
			<ComponentWithHooksToTest
				onClick={onClick}
				onCustomEvent={onCustomEvent}
			/>
		)

		// łapiemy button i klikamy w niego
		const button = component.find('button')
		button.simulate('click')

		// sprawdzamy czy funkcja się wywołała
		expect(onCustomEvent.mock.calls.length).to.be.equal(1)

		// sprawdzamy czy funkcja się wywołała z odpowiednią wartością
		const [firstCallArgs] = onCustomEvent.mock.calls
		expect(firstCallArgs[0]).to.be.equal('do something')
	})
})
