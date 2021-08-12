import {createContext, useState, useContext} from 'react'


const languages = {
    english:{
        home: "home",
        logo:"'s library",
        aboutUs: "About Us",
        departments: "departments",
        science:"science",
        foreign:"foreign",
        journals:"journals",
        ourTeam:"Out team",
        signIn:"sign in",
        lang:"language"
    },
    uzbek:{
        home: "bosh sahifa",
        aboutUs: "Biz haqimizda",
        logo:"kutubxonasi",
        departments: "bo'limlar",
        science:"Ilmiy ishlar",
        foreign:"Xorijiy adabiyotlar",
        journals:"Vaqtli nashrlar",
        ourTeam:"Jamoamiz",
        signIn:"A'zolikni tasdiqlash",
        lang:"til"
    }
}

const LanguageContext = createContext(null)

const LanguageProvider = ({children})=>{
    const [language, setLanguage] =useState(window.localStorage.getItem("lang")||"english")
    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            <LanguageContext.Consumer>
               { ()=>children}
            </LanguageContext.Consumer>
        </LanguageContext.Provider>
    )
}
const useLanguage = (setterOnly) =>{
    const {language, setLanguage}= useContext(LanguageContext)
    return setterOnly ? [setLanguage]: [language, setLanguage]
}
export {
    useLanguage,
    LanguageProvider,
    languages
}