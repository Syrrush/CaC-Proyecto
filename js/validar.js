const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const image = document.getElementById("image")
const nivel = document.getElementById("nivel")
const form = document.getElementById("form")
const warn = document.getElementById("warning")
const res = document.getElementById("res")
const env = document.getElementById("env")

env.addEventListener("submit",(e) => {
    e.preventDefault();
    checkInputs()
   })
// function clean() {
//     res.addEventListener("click", )
// $(document).ready(function(){
//     $("#env").click(function checkInputs (){
//         let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//         let regexLetras = /^[A-Za-z\s]+$/
//         let regexImagen = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/
//         const nameValue = nombre.value.trim()
//         const nivelValue = nivel.value.trim()
//         const emailValue = email.value.trim()
//         const imageValue = image.value.trim()
    
//         // if (nameValue.replace(/\s\s+/g, '') === " "){
//         //     alert("No puedes iniciar el nombre con espacios")
//         // }
//         if(!regexLetras.test($("#nombre"))){
//             alert("Solo puedes utilizar letras y espacios")
//         }
//         if(nameValue.replace(/\s\s+/g, '').length < 5 || nameValue.length > 50) {
//             alert("El nombre  debe tener mínimo tres carácteres  y como máximo 50")
//         }
    
//             if(nivelValue.replace(/\s\s+/g, '') === " "){
//                 alert("No puedes iniciar el nivel con espacios")
//             }
//             if(!regexLetras.test(nivelValue)){
//                 alert("Solo puedes utilizar letras y espacios")
//             }
//             if(nivelValue.replace(/\s\s+/g, '').length < 5 || nivel.value.length > 50){
//                 alert("El nivel debe tener mínimo tres carácteres  y como máximo 50")
//             }
            
//         if(!regexEmail.test(emailValue)){
//             alert("El email no es valido")
//         }
        
//             if(!regexImagen.test(imageValue)){
//                 alert("El formato de imagen no es valido")
//         }
    
// })})



function checkInputs (){
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexLetras = /^[A-Za-z\s]+$/
    let regexImagen = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/
    const nameValue = nombre.value.trim()
    const nivelValue = nivel.value.trim()
    const emailValue = email.value.trim()
    const imageValue = image.value.trim()

    if (nameValue.replace(/\s\s+/g, '') === " "){
        setErrorFor(nombre,"No puedes iniciar el nombre con espacios")
        
    } else {
        setSuccesFor(nombre)
        env.disabled = false
    }
    if(!regexLetras.test(nameValue)){
        setErrorFor(nombre,"Solo puedes utilizar letras y espacios")
        
    } else {
        setSuccesFor(nombre)
        env.disabled = false
    }
    if(nameValue.replace(/\s\s+/g, '').length < 5 || nameValue.length > 50) {
        setErrorFor(nombre,"El nombre  debe tener mínimo tres carácteres  y como máximo 50")
        
    } else {
        setSuccesFor(nombre)
        env.disabled = false
    }

        if(nivelValue.replace(/\s\s+/g, '') === " "){
            setErrorFor(nivel,"No puedes iniciar el nivel con espacios")
            
        } else {
            setSuccesFor(nivel)
            env.disabled = false
        }
        if(!regexLetras.test(nivelValue)){
            setErrorFor(nivel,"Solo puedes utilizar letras y espacios")
            
        } else {
        setSuccesFor(nivel)
        env.disabled = false
        }
        if(nivelValue.replace(/\s\s+/g, '').length < 5 || nivel.value.length > 50){
            setErrorFor(nivel,"El nivel debe tener mínimo tres carácteres  y como máximo 50")
            
        } else {
            setSuccesFor(nivel)
            env.disabled = false
        }
        
    if(!regexEmail.test(emailValue)){
        setErrorFor(email,"El email no es valido")
        env.disabled = true
    } else {
        setSuccesFor(email)
        env.disabled = false
    }
    
        if(!regexImagen.test(imageValue)){
            setErrorFor(image,"El formato de imagen no es valido")
            
    } else {
        setSuccesFor(image)
    }
}




function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    formControl.className = "form-control error"
    small.innerText = message
}

function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}