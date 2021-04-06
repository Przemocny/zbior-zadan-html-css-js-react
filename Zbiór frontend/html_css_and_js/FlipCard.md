<h2 align="center">Przykładowe zadanie ze zbiorow Gladiatorów Javascriptu. Kup nasze zbiory już dziś!</h2>
<h5 align="center">https://gladiators-of-javascript.com/#gladiators</h5>

<h2 align="center">Flip Card</h2>

<br>

## Wymagana wiedza

- JavaScript, HTML, CSS


## Technologie potrzebne do zadania

- JavaScript, HTML, CSS, Metodologia BEM

## Cele główne
* [ ] Twoim zadaniem jest stworzyć element planszy o wymiarach 5x5 (kwadratów) jak w gifie poniżej.
* [ ] Skorzystaj z poniższych wymiarów przy projektowaniu elementu:
```scss
.grid{
    // kwadrat 5x5
    &__cell{
      
    }

    &__card{
        &--flipped{}

        &--small{
            // kwadrat 1x1
        }
        &--medium{
            // prostokąt 2x1
        }
        &--big{
            // kwadrat 2x2
        }
    }
   
}
```
* [ ] Zastosuj metodologię BEM podczas przygotowywania styli.
* [ ] Sposób działania planszy:
- wybór dowolnej karty powodujem że odwraca się ona jak memo i zostaje w takiej pozycji do ponownego kliknięcia przez użytkownika,
- wybor innej karty nie wpływa na pozycję innych kart

* [ ] Postaraj się dodać animację odwrotu karty tak jak w gifie, nie jest to wymóg, ale bardzo mile widziana opcja.


![](flipCardGrid.gif)





