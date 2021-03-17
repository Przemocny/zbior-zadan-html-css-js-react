// Zbuduj klasę HumanBuilder, 
// która wykorzystuje wzorzec Builder

class HumanBuilder {
    constructor(name){
        // każdy prop w konstruktorze ma być prywatny
    }
    add_surname(surname){}
    add_email(email){}
    add_age(age){}
    add_salary(monthlySalary){}
    add_gender(sex){}
    add_friends(...humans){}
    build(){
        // w tej funkcji wszystkie prywatne propy mają
        // być zwracane jako obiekt z odpowiednimi kluczami i wartościami
    }
}

const human = new HumanBuilder('John')
                    .add_surname('Doe')
                    .add_age(35)
                    .add_email('john.doe@gmail.com')


// human == {}
// human.build() == {name:"John", surname:"Doe", age:35, email:"john.doe@gmail.com"}