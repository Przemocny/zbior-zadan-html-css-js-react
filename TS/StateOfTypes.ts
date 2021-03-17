// stwórz klasę StateOfTypes od typu generycznego T, która
// - jęsli T będzie typem prostym to zmiana prywatnego stanu state przez metodę setState nadpisze aktualny stan na ten wchodzący
// - jeśli T będzie Arrayem lub Setem, to podczas wywolania metody setState do prywatnego stanu state dostanie dodany element
// - jeśli T będzie Obiektem to podczas wywoałania metody setState wchodzący stan jest łączony z aktualnym
// - podczas użycia setState, po zmianie stanu następuje wywołanie metody onChange gdzie do przekazywanego callback trafia zarówno wartość starego stanu jak i nowego
// - metoda getState zwraca aktualną wartość stanu prywatnego state

type OnChangeCallback<T> = (prev:T, next:T) => void

class StateOfTypes<T>{
    private state:T;
 
    getState(){}
    setState(newState){}
    onChange(callback:OnChangeCallback<T>){}
}


