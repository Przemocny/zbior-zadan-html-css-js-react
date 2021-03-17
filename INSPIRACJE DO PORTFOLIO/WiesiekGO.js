Wiesiek GO

Stwórz otwartą grę w klimatach Wiedźmina
Opartą o geolokalizację oraz localStorage

Cel gry jest taki, aby wyjść na spacer (sam, z kolegą lub dziećmi, z psem) 
i zabijać wirtualne potwory i zbierać wirtualny loot i doświadczenie,
tylko nie w domu, a na dworze

Gra mogłaby wyglądać podobnie do tej:
https://store.steampowered.com/app/946610/Pocket_Rogues/


Gra może być z kategorii Rouge like, albo bullet hell,
ale może być też drużynowo survivalowa z falami wrogów,
lub w wirtualne budowanie na świeżym powietrzu dla dzieci


Przykładowy opis funkcjonalności:
(user)
Pozwól graczowi stworzyć postać:
- spraw aby postać można było rozwijać w stronę
-- wojownika
-- maga
- dodaj 2 miejsca na bronie i miejsce na hełm, pancerz i amulety
- statystyki i ekwipunek postaci są przechowywane w localStorage


(env)
Stwórz otoczenie:
- niech mapa ma customizowane otoczenie
- dodaj zestaw zasobów w grze (kamienie, drewno, złoto) i skrzynek z przedmiotami o konkretnych porach dnia i nocy


(battle)
Umil graczom rozgrywkę:
- spraw aby były ataki:
-- dystansowe
-- ataki z bliska
-- ataki magiczne
-- aury wpływające na wrogów w okolicy


(mobs)
Zadbaj o zagrożenie i trochę ruchu:
- zadbaj o to aby potwory losowo generowały sie na mapie
-- aby chodziły po mapie
-- aby miały agro jeśli się do nich podejdzie
-- zadbaj o to aby potwory były szybkie, ale aby dało im się uciec biegając z telefonem


(survival)
Zbuduj wirtualną twierdzę w pobliżu swojego domu
-- postaw wieże które atakuja wrogów
-- zbuduj sobie kapliczkę, która będzie Cię leczyć 


(host)
Po stronie backendowej:
- musisz łatwo dzielić się dostępem do swojej gry, np poprzez link albo jakiś slug
- pokoje generowane, dane zapisywane u hosta, nie online
- sockety służą do tego, aby wymieniać dane hosta z danymi usera w pobliżu