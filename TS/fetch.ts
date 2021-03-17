// napisz interfejsy dla tej funkcji request, bazujacej na fetch:

// powinieneś przewidzieć w typie klucze na:
// - metody get/post/delete/...
// - body do requesta w formie obiektu lub w formie FormData
// - headers do requesta w formie obiektu

interface FetchRequestConfig {

}
interface FetchResponse{

}

function request(url, config: FetchRequestConfig) : FetchResponse{
    return fetch(url, config)
}