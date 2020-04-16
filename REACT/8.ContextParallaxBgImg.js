// Treść zadania #8 - ParallaxBgImage

// Stwórz komponent, w którym tło jest zdjęciem 
// i przesuwa się ono w innym tempie niż ekran tworząc efekt paralaksy

// Korzystając z ContextApi Reacta stwórz:

const ParallaxProvider = ({children})=>{
    // komponent Provider, w którym przechwytujesz dane z eventu onscroll podpiętego do window
    // i wrzucasz wszystkie niezbędne dane stanu, a potem do contextu
    return null
}

const Parallax = ({children, bgImage})=>{
    // komponent, w którym renderują się dowolne elementy wrzucone jako prop children
    // - jest od podpięty do tego samego contextu
    // - tłem komponentu Parallax jest url z bgImage
    // - wyciąga z niego informacje o aktualnym położeniu scrolla 
    // - poprzez referencje ma dostęp do informacji o swoim położeniu i rozmiarze na ekranie
    // - liczy nowe położenie zdjęcia z tła na podstawie powyższych danych ze scrolla oraz ze swojej pozycji i rozmiaru
    return null
}