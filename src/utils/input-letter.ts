const inputLetter = (e:any) =>{
    return e.target.value.replace(/[^a-zA-Z-а-яА-Я]/ig,"")
}
export default inputLetter;

export const phoneMask = (e:any) => {
    console.log("Phone, ", e)
    return e.target.value.replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/^(\(\d{2})(\d)/, '$1)$2')
    .replace(/(\d{3})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{2})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}
export const passport = (e:any) => {
    return e.target.value.replace(/\D/g, '')
    .replace(/(\D{2})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{7})\d+?$/, '$1');
}
export const cardNumber = (e:any) => {
    return e.target.value.replace(/\D/g, '')
    .replace(/(\d{4})(\d{1,3})/, '$1-$2')
    .replace(/(\d{4})(\d{1,3})/, '$1-$2')
    .replace(/(\d{4})(\d{1,3})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}
export const cardDate = (e:any) => {
    return e.target.value.replace(/\D/g, '')
    .replace(/(\d{2})(\d{1,3})/, '$1/$2')
    .replace(/(\/\d{2})\d+?$/, '$1');
}
export const inn = (e:any) => {
    return e.target.value.replace(/\D/g, '')
    .replace(/(\d{3})(\d{1,3})/, '$1-$2')
    .replace(/(-\d{6})\d+?$/, '$1');
}
// replace(/\D/g, '')
//     .replace(/^(\d)/, '($1')
//     .replace(/^(\(\d{2})(\d)/, '$1) $2')
//     .replace(/(\d{4})(\d{1,5})/, '$1-$2')
//     .replace(/(-\d{5})\d+?$/, '$1');