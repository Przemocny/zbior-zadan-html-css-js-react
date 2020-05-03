// Treściwy artykuł o webworkerach i serviceworkerach oraz workletach:
// https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/



// web worker (używane najczęściej) - kiedy np masz jakieś ciężkie obliczenia 
// więc wyrzucasz to do przeliczenia z głównego wątku do web workera, 
// aby wróciło do Ciebie już przeliczone


// service worker (używane w szczegółnych wypadkach) - kiedy potrzebujesz obsługiwać coś związane z siecią, np pushe, praca offline. 
// stanowią niezależne proxy między aplikacją, a światem 


// worklet (używane bardzo rzadko) - kiedy wiesz, że pewną czynnośc np w css będziesz 
// musial wykonywać wiele razy, więc piszesz sobie np dodatkową funkcję