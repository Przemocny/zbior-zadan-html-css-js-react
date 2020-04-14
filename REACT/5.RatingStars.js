// Treść zadania #05:
// wykorzystując podany zestaw danych o ocenach, stwórz komponenty Rating, RatingList, AverageScore
const ratings = [
    {
      "recordId": "5e95aa806e575fbe1fa78dff",
      "name": "Kellie Mccormick",
      "score": 4,
      "content": "Mollit anim adipisicing adipisicing officia. Reprehenderit cupidatat qui amet pariatur voluptate commodo ea culpa aute incididunt duis."
    },
    {
      "recordId": "5e95aa808a001857492fd90e",
      "name": "Allison Ratliff",
      "score": 1,
      "content": "Do ipsum fugiat nisi ea laboris sit pariatur aliqua proident. Qui cillum veniam incididunt cupidatat mollit commodo tempor nisi ad ex duis ullamco ea ut."
    },
    {
      "recordId": "5e95aa80c9f766d3146aef4b",
      "name": "Mccray Byers",
      "score": 4,
      "content": "Lorem minim pariatur deserunt laborum cillum enim velit veniam duis tempor dolor consectetur incididunt. Ullamco velit eiusmod Lorem consectetur exercitation aliquip occaecat."
    },
    {
      "recordId": "5e95aa80a4781bd158f3e9a3",
      "name": "Boyd Forbes",
      "score": 4,
      "content": "Mollit id nulla consectetur ipsum proident culpa ea est sit. Consectetur sint sit cupidatat incididunt."
    },
    {
      "recordId": "5e95aa805a7e1f538fe541f5",
      "name": "Millicent Larsen",
      "score": 1,
      "content": "Est ut dolor consequat sunt occaecat adipisicing mollit aute. Adipisicing sunt nisi irure et irure mollit ex incididunt."
    },
    {
      "recordId": "5e95aa80881a5c74274c1dba",
      "name": "Odessa Greer",
      "score": 1,
      "content": "Aliqua voluptate duis dolore non culpa elit officia tempor. Ex proident incididunt Lorem amet non proident."
    },
    {
      "recordId": "5e95aa80e2d31d22e7dbec80",
      "name": "Alejandra Petersen",
      "score": 3,
      "content": "Aliquip duis et eiusmod aute nostrud nisi in do. Reprehenderit minim et reprehenderit eiusmod proident excepteur occaecat enim magna nulla commodo veniam."
    },
    {
      "recordId": "5e95aa808cb8c63b4e6d2e35",
      "name": "Solis Donovan",
      "score": 5,
      "content": "Enim in nisi sunt est velit aliquip. Aliqua pariatur nostrud exercitation esse voluptate mollit in eiusmod mollit."
    },
    {
      "recordId": "5e95aa80a98558752d8df890",
      "name": "Neal Sims",
      "score": 4,
      "content": "Eu magna Lorem excepteur non adipisicing aliqua laboris minim nisi tempor cillum magna nostrud. Irure enim amet aute ipsum."
    },
    {
      "recordId": "5e95aa80243c1c9ef58eaaa0",
      "name": "Alisa Mcneil",
      "score": 5,
      "content": "Tempor deserunt officia laboris excepteur laboris eu laboris minim occaecat. Duis amet enim pariatur nostrud adipisicing velit nostrud in dolor exercitation dolor."
    },
    {
      "recordId": "5e95aa804828562f7e8a1d36",
      "name": "Campos Sanders",
      "score": 5,
      "content": "Duis magna proident adipisicing pariatur ea occaecat commodo. Minim aute nisi mollit enim incididunt nostrud ad esse nostrud sint adipisicing."
    },
    {
      "recordId": "5e95aa806305f8b0fb2ebe8b",
      "name": "Ferguson Kerr",
      "score": 2,
      "content": "Sint consectetur et do et reprehenderit non incididunt reprehenderit. Sint ad reprehenderit elit exercitation fugiat."
    },
    {
      "recordId": "5e95aa807cd9d4dd4fb06ccf",
      "name": "Abbott Mejia",
      "score": 1,
      "content": "Consequat ipsum incididunt ullamco eu in id cupidatat cupidatat veniam commodo exercitation. Velit ullamco nulla id consequat consectetur nostrud exercitation velit."
    },
    {
      "recordId": "5e95aa80d1925060b252a129",
      "name": "Keisha Holmes",
      "score": 3,
      "content": "Eu officia elit sit duis voluptate ea. In laborum irure officia ex nisi nisi cupidatat consequat elit eu et."
    }
  ]

const RatingsList = ({ratings})=>{
    // RatingsList o propsach ratings, który wyświetla komponent AverageScore 
    // oraz listę pierwszych 10 elementów w komponentach Rating
    return null
}

const AverageScore = ({ratings})=>{
    // AverageScore o propsach ratings, który zawiera 5 ikon gwiazdek (pełnych/pustych)
    // - komponent liczy średnią z ocen zaokrąglając ją do pełnej liczby całkowitej
    // - jeśli przykładowo średnia ocena to 4.3 to komponent ma zamalować na żółto pierwsze 4 gwiazdki a ostatnią 5 ma zostawić na szaro
    return null
}

const Rating = ({rating})=>{
    // Rating o propsach rating, który wyświetla
    // - imię i nazwisko wystawiającego
    // - jego ocenę w formie gwiazdek - podobnie do AverageScore
    // - treść komentarza do oceny, przycięta do długości 120 znakoów
    return null
}
