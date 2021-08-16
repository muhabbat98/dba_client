const inputLetter = (e:any) =>{
    if(e){
    return e.replace(/[^a-zA-Z-а-яА-Я]+/g,"")
    } 
    return "";
}
export default inputLetter;

export const onlyNumber = (e:any) =>{
    if(e){
        return e.replace(/[^0-9]+/g,"")
    }
    return "";
}


export const phoneMask = (e:any) => {
    if(e){
    return e.replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/^(\(\d{2})(\d)/, '$1)$2')
    .replace(/(\d{3})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{2})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
    }
    return "";
}
export const passport = (e:any) => {
    if(e){
        return e.replace(/\D/g, '')
    .replace(/(\d{2})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{7})\d+?$/, '$1');}
    return "";
}
export const cardNumber = (e:any) => {
    if(e){
        return e.replace(/\D/g, '')
    .replace(/(\d{4})(\d{1,3})/, '$1-$2')
    .replace(/(\d{4})(\d{1,3})/, '$1-$2')
    .replace(/(\d{4})(\d{1,3})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
    }
    return "";
}
export const cardDate = (e:any) => {
    if(e){
        return e.replace(/\D/g, '')
    .replace(/(\d{2})(\d{1,3})/, '$1/$2')
    .replace(/(\/\d{2})\d+?$/, '$1');
    }
    return "";
}
export const inn = (e:any) => {
    if(e){
        return e.replace(/\D/g, '')
    .replace(/(\d{3})(\d{1,3})/, '$1-$2')
    .replace(/(-\d{6})\d+?$/, '$1');
    }
    return "";
}
export const email = (e:any) => {
    if(e){
        return e.replace(/^\S+@\S+\.\S+$/i, '')
    
    }
    return "";
}
export const anotherThreepleCard = (e:any) => {
    if(e){
        return e.replace(/\D/g, '')
    .replace(/(\d{4})(\d{1,3})/, '$1-$2')
    .replace(/(\d{4})(\d{1,3})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
    }
    return "";
}
