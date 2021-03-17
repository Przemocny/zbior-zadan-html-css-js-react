const goodBearerToken = "f3823903b2dd6e35243b1bbe5a14f651"
const badBearerToken = "1c9de95d445fd0824b3bcf1def5f7bfb"

// Stwórz logikę React Router, która:
// - ma 3 routy - /, /login, /secure-link
// - jeśli w GET lub podczas routingu w urlu jest przekazywane query `?token=f3823903b2dd6e35243b1bbe5a14f651`, to użytkownik może wejść na wszystkie routy
// - jeśli w GET lub podczas routingu w urlu jest przekazywane query `?token=1c9de95d445fd0824b3bcf1def5f7bfb`, lub nie ma argumentów to użytkownik zostaje przekierowany na /login

