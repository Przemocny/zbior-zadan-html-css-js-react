// Stwórz klasy oraz interfejsy korzystając z zasad SOLID

class Attacker{
    // klasa pozwala na dodanie do postaci metody .attack(charakter), 
    // - która zabiera tyle życia atakowanemu ile atakujący ma sily i tyle samo wytrzymałości atakującemu

    // klasa dodaję prop isDead defaultowo ustawiony na false, chyba że punkty zdrowia są równe 0 to wtedy true
}

class GoldenTongue{
    // klasa pozwala na dodanie do postaci metody .defendWithWords(attacker), 
    // - która odejmuje atakującemu tyle punktów ataku ile atakowany ma charyzmy i inteligencji łącznie
}
 

class Character {
    // to klasa bazowa postaci w grze

    // każda postać posiada
    // - swój nickname
    // - zdrowie - 100pkt, 
    // - wytrzymałość - 100pkt
    // - siłę - 13pkt
    // - inteligencję - 4pkt
    // - charyzmę - 5pkt

    // dziedziczy po klasie Attacker

}

class Healer {
    // to klasa rozszerzająca klasę bazową
    // - ma siły 10pkt, ale inteligencji 11pkt

    // dostaje metodę .heal(character)
    // - która pozwala na dodanie do postaci uleczanej od 1.1 do 2.5 razy tyle pkt zdrowia co postać ma pkt inteligencji
}

class Priest {
    // dziedziczy po klasie Healer parametry oraz metody
    // dziedziczy po klasie GoldenTongue metodę .defendWithWords, która odpalana jest przed każdym atakiem
}


// Otwórz testową scenę walki, w której
// - "biją się" wojownik i 2 kapłanów
// - jeden kapłan leczy drugiego
// - wojownik zabija jednego z kapłanów
// - potem kapłan zabija wojownika
