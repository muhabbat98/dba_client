const inputLetter = (e:any) =>{
    return e.target.value.replace(/[^a-zA-Z-а-яА-Я]/ig,"")
}
export default inputLetter;

export const phoneMask = (e:any) => {
    return e.target.value.replace(/[^0-9]/g, "")
    // return e.target.value.replace(/\D/g, "")
}