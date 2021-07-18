let form_signIn = document.querySelector("#formSignIn")

form_signIn.onsubmit = (e)=>{
    e.preventDefault();

    let email = form_signIn.email.value.trim()
    let myInputPassword = form_signIn.myInputPassword.value.trim()

    let data_signIn = {
        email : email,
        myInputPassword : myInputPassword
    }
    if(email && myInputPassword){
        signIn_process(data_signIn)
    }

}

let signIn_process = async (data)=>{
    let email = data.email
    let password = data.myInputPassword
    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        let user = result.user
        if (user.emailVerified) {
            window.open('./chat.html','_self')
        } else {
            throw new Error('Must verify email!')
        }
    } catch (error) {

        let message = error.message
        sweetAlert('error', message)
    }
}
function sweetAlert(icon, content) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: icon,
        title: content
      })
}



