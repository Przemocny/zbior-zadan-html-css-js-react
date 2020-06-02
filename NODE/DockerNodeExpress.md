## Zbuduj obraz dockera oraz plik docker-compose.yml dla rest api postawionego w express


#### Struktura plików:
- folder `app` -> tutaj jest apka expressa
- Dockerfile -> tutaj jest konfiguracja obrazu pod apkę expressa
- docker-compose.yml -> tutaj jest konfiguracja serwisu `node`


#### Aplikacja express:
- ma zawierac 1 endpoint `/test`, który serwuje jsona z wartością ['test']
- ma mieć odblokowane CORSy, aby dało się korzystać z endpointu z dowolnego hosta
- ma consologować swój aktualny NODE_ENV, z którym jest odpalana na starcie apki


#### Dockerfile dla serwisu o nazwie `node` ma zawierać:
- wskazanie workdir jako /app
- zainstalowanie najnowszego npma
- zainstalowanie wszystkich paczek z package.json
- odpalenie aplikacji expressa komendą `node app.js`


#### docker-compose.yml ma zawierać:
- serwis `node`, który pracuje na obrazie Dockerfile
- wystawienie dowolnego portu apki na port 3000
- stworzenie volumenu app połaczonego z folderem /app 
- zmienną środowiskową NODE_ENV przełączoną na 'production'





