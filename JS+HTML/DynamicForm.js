// napisz funkcję do generowania dynamicznie formularzy 
function generateFormOnPattern(settings){
    // return ...
}



// na podstawie ustalonego schematu testSettings
const testSettings = {
    action:'/contact/by-mail',
    method:'POST',
    inputs:[
        {type:'header', label:'Skontaktuj się z nami'},
        {name:'email', type:'email', placeholder:'Wpisz swój email'},
        {name:'content', type:'textarea', placeholder:'Wpisz treść wiadomości'},
        {type:'submit', label:'Wyślij wiadomość'}
    ]
}

// powinien wyjść taki formularz
<form method="POST" action="/contact/by-mail">
    <h4>Skontaktuj się z nami</h4>
    <input type="email" name="email" placeholder="Wpisz swój email"></input>
    <textarea name="content" placeholder="Wpisz treść wiadomości"></textarea>
    <button>
        Wyślij wiadomość
    </button>
</form>



