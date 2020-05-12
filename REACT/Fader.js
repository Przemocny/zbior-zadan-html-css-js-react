
// Treść zadania #02:

// Wykorzystując ContextApi Reacta o wartości {idx=0, setIdx=()=>{}} oraz hooksy stwórz grupę komponentów, wykorzystujących wspólny ten kontekst, aby stworzyć compount components o nazwie Fader:
// - ***FaderDots o propsach (?) - komponent, w którym wyświetla się tyle kropek ile jest elementów children w FaderViews. Kliknięcie w kropkę powoduje odpowiednią zmianę wyświetlanego elementu w FaderViews
// - ***Przy zmianie wyświetlanego elementu w FaderViews fajnie jakby robiła się animacja, znikania poprzedniego i pojawiania się kolejnego, wybranego elementu


const Fader = ({children})=>{
    // - Fader o propsach ({children}) - komponent, w którym działają wszystkie inne komponenty
    return null
}

const FaderViews = ({children})=>{
    // - FaderViews o propsach ({children}) - komponent, w którym na podstawie, aktualnej wartości {idx} z kontekstu wyświetlany jest tylko komponent o odpowiednim indeksie
    return null
}

const FaderButton = ({direction})=>{
    // - FaderButton o propsach ({direction= -1 lub 1}) - komponent, w który można kliknąć, aby zmienić na poprzedni/następy wyświetlany w FaderViews odpowiedni element children
    return null
}
