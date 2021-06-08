const inputLetter = (e:any) =>{
    return e.target.value.replace(/[^a-zA-Z]/ig,"")
}
export default inputLetter;