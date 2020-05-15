import React from 'react'

// to są dane językowe Twoich komponentów
const pl = {
    attention:{
        title:'Dobrze, że jesteś, sprawdź to zadanie',
        subtitle:'Pomoże Ci ogarnąć jak zmieniać język w apkach reacta',
        ctaButton:'Dowiedź się więcej',
    },
    newsletter:{
        title:'Bądź na bieżąco',
        ctaButton:'Idź do repo ->',
        action:'/new-subscriber?lang=pl'
    }
}
const en = {
    attention:{
        title:'Hey, check this task',
        subtitle:'It can help You to learn how to change language in react app',
        ctaButton:'More',
    },
    newsletter:{
        title:'Let\'s keep in touch',
        ctaButton:'To repository !!!',
        action:'/new-subscriber?lang=en'
    }
}

// to są dostępne języki
const langs = {
    pl, en
}

// to jest kontekst do wielojęzyczności aplikacji
// dane językowe oraz metody do zmiany muszą zostać załadowane do kontekstu
const LangContext = React.createContext()

// Stwórz komponent, który przy pomocy przycisków z flagami
// pozwoli zmienić LangContext między pl i en 
const LangChanger = ({langs=langs})=>{
    // return ...
}

// stwórz komponenty AttentionSection i NewsletterSection, 
// które na podstawie propa sectionName
// pobierą z kontekstu odpowiednie teksty, 
// dla odpowiedniej sekcji w odpowiednim języku

const AttentionSection = ({sectionName="attention"})=>{
    // texts brane z LangContext
    const {title, subtitle, ctaButton} = texts[sectionName]
    return <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <button>{ctaButton}</button>
    </div>
}

const NewsletterSection = ({sectionName="newsletter"})=>{
    // texts brane z LangContext
    const {title, ctaButton, action} = texts[sectionName]
    return <form action={action}>
        <h1>{title}</h1>
        <button>{ctaButton}</button>
    </form>
}