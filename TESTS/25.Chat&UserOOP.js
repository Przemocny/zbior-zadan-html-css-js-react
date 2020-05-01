// Jest to zadanie demko ze zbioru:
// - Nieprzewidziane i sprawiające problemy testy w JAVASCRIPT i REACT


// wg OOP i zasad SOLID zaprojektuj 3 klasy

// ChatRoom, który reprezentuje pokój na czacie
class ChatRoom {
    // uuid
    // nazwę
    // opis
    // lista rozmówców
    // lista zbanowanych nicków
    // lista wiadomości pokoju

    // można dodawać/usuwać wiadomości
    // można dodawać/usuwać userów
    // można banować userów
}

// User, który reprezentuje usera na chacie
class User {
    // uuid
    // nickname
    // może zmienić swój nickname
    // może dołączyć do pokoju
    // może napisać wiadomość w pokoju
}

// SuperUser, który reprezentuje admina na chacie
class SuperUser {
    // dziedziczy metody i propy po Userze
    // może usunąć dowolną wiadomość
    // może otworzyć nowy pokój
    // może wykopać kogoś z pokoju
    // może wykopać zbanować kogoś w pokoju
}

// przetestuj sytuację, w której:
// - jest tworzony admin o nicku "ImGod"
// - "ImGod" tworzy nowy pokój o nazwie "Minecraft"
// - jest tworzony user o nicku "BadBoy"
// - jest tworzony user o nicku "GoodGirl"
// - "GoodGirl" i "Badboy" dołączają do pokoju "Minecraft"
// - w 3 z "ImGod" piszą koło 10 wiadomości między sobą
// - "ImGod" usuwa ostatnią wiadomość usera "Badboy"
// - "ImGod" wykopuje usera "Badboy"
// - "Badboy" dołącza ponownie do pokoju "Minecraft"
// - w 3 z "ImGod" piszą koło 5 wiadomości między sobą
// - "ImGod" banuje usera "Badboy"
