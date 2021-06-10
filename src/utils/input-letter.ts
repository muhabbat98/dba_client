const inputLetter = (e:any) =>{
    return e.target.value.replace(/[^a-zA-Z-а-яА-Я]/ig,"")
}
export default inputLetter;