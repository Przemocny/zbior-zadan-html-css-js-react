import React from 'react'

// wzorzec HOC - high order component
// pewien typ funkcjonalności 
// który dzięki kompozycji pozwala tworzyć 
// bardziej reużywalne elementy

// np nie musimy każdego elementu w layoucie animować
// można stworzyć sparametryzowany HOC, który w łatwy sposób 
// pozwoli nam używać tej funkcjonalności (animacji)
// w wielu miejscach, w bardzo łatwy sposób

const withAnimation = (WrappedComponent, modificators) => (props)=>{
    return (<div className="with-animation">
            <WrappedComponent {...props}/>
    </div>)
}

const AnimatedComponent = withAnimation(()=> "component", {from:'left',to:'center'})


// inne hooksy:
// withAuthorization - pokazuje komponent jeśli user jest zautoryzowany w apce
// withDelay - pokazuje komponent na X sekund - np alerty