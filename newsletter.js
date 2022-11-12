let inputMail = document.getElementById("newsLetterInput")
let emails = []




function saveEmail(){
    console.log(inputMail.value)
    if(emails.includes(inputMail.value)){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ya estás dentro de nuestros suscriptores!',
            showConfirmButton: false,
            timer: 1500
          })
    } else {

        emails.push(inputMail.value)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Te agregamos a nuestra lista de suscriptores!',
            showConfirmButton: false,
            timer: 1500
          })
    }
}