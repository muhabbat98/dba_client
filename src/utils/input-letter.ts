const inputLetter = (e:any) =>{
    return e.target.value.replace(/[^a-zA-Z-а-яА-Я]/ig,"")
}
export default inputLetter;

export const phoneMask = (e:any) => {
    return e.target.value.replace(/\D/g, "").replace(/\D{6}/g,"")
}