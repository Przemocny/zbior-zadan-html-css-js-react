# GitHub Bardzo Podstawowy

GitHub to przyjaciel każdego programisty

Jeżeli o kodzie pomyślisz jak o książce to, Github będzie archiwum, w którym składujesz każdą wersję książki, od wczesnych szkiców do finalnej wersji

Bardziej technicznie: Github jest to narzędzie do kontroli wersji oprogramowania. Ułatwia pracę nad projektem wielu osobom oraz pozwala na kontrolę kto aktualizuje kod na repozytorium

## Terminologia

**repozytorium** - miejsce przechowywania kodu, są repozotoria lokalne - u Ciebie na komputrze, oraz zdalne np na github.com

**push** - wprowadzenie zatwierdzonych zmian lokalnych do repozytorium zdalnego

**commit** - zatwierdzenie zmian lokalnych względem poprzedniej wersji

**pull** - porównanie z lokalną wersją i ściągnięcie aktualnej wersji z repozytorium


## Jak ściągnać repo z Githuba do siebie

<img src='./imgs/github copy link.png'/>

#### przez terminal
`git clone https://github.com/Przemocny/zbior-zadan-html-css-js-react.git` polecenie używane do ściągnięcia repozytorium z githuba, polecenie można użyć w terminalu VSCODE

#### przez zipa
Klikasz przycisk `Download ZIP` i zapisujesz na dysku, tam gdzie chcesz pracować z kodem


## Jak wrzucić zmiany do repozytorium zdalnego

#### przez terminal
1. `git add .`  dodaje zmiany do commita (`.` oznacza, że dodaje wszystkie pliki podpięte do tego repozytorium)

2. `git commit -m "<komentarz>"` tworzy commit z wcześniej dodanymi zmianami (flaga `-m` jest obowiązkowa, jest to komentarz do commita)

3. `git push` wysyła wszystkie zaakceptowane zmiany w repozytorium lokalnym do repozytorium zdalnego

#### przez VSCODE

1. przejdź do wtyczki Gita do VSCODE
<img src='./imgs/plugin.png'/>

2. dodaj nazwę swojego commita, np "zmiany w intro do githuba"
<img src='./imgs/commit.png'/>

3. klikamy "Commit" - ikonkę "check"
4. klikamy "Commit" - ikonkę "check"


<!-- 



## Komendy


`git pull` ściąga wszystkie zmiany z repozytorium i aktualizuje lokalną wersję

`git push` wysyła wszystkie stworzone comity lokalne i aktualizuje repozutoprium na githubie

`git status` pokazuje wszystkie pliki w których zaszła zmiana lokalna względem repozytorium na githubie od momentu ostatniego pusha



## Jak korzystać z Githuba?

Na początku, aby ściągnąć lub mówiąc terminologią techniczną "sklonować" repozytorium należy użyć komendy `git clone <adres_do_repozytorium>`.

Jeżeli chcemy zaktualizować lokalną wersję, bo np. ktoś z zespołu wprowadził poprawkę na repozytorium należy użyć polecenia `git pull`, jeżeli będziemy posiadali jakieś lokalne zmiany github będzie od nas wymagał, abyśmy stworzyli commita z tych zmian. Aby to zrobić użyjemy `git add .`, polecenie to spowoduje dodanie do commita wszystkich zmian w każdym pliku. Następnie za pomocą `git commit -m <komentarz>` utworzymy commita. Na końcu, aby zatwierdzone zmiany wrzucić do repozytorium użyjemy komendy `git push`

## VisualStudio Code

VS Code rozszerzenie GitHub:
![alt text](https://drive.google.com/uc?id=1OCgEe4H9Pl8OKZeUfMeLU6GafmEQj0ya "img1")

Zmiany są pokazywane w tej części, aby je zaakceptować trzeba kliknąć w "+" przy pliku lub przy "Changes" co zaakceptuje wszystkie zmiany:
![alt text](https://drive.google.com/uc?id=1SgFXx6HoqoXZdplh7Wj_vbVbQeLi8yTf "img2")

Zmiany zaakceptowane (staged changes):
![alt text](https://drive.google.com/uc?id=1Xevmx2mdDGAqf9n3rr60V8PsKV9KIusF "img3")

Tutaj dodaje się komentarz do commita:
![alt text](https://drive.google.com/uc?id=16slJmOtmcx0uiH4OJwj6sSfsqWTmNHVF "img4")

Po kliknięciu w trzy kropeczki nad komentarzem rozwija się menu kontekstowe, opcje wybrane z tego menu działają tak jak komendy o takiej samej nazwie:
![alt text](https://drive.google.com/uc?id=1bZIN-VNckeKF83nDPwaPkijnlwyrdZvs "img5") -->


by :octocat: [Cosikowy](https://github.com/Cosikowy) i :octocat: [Przemocny](https://github.com/Przemocny)


Linki do dalszej poznawania Gita:
- https://github.github.com/training-kit/downloads/pl/github-git-cheat-sheet/