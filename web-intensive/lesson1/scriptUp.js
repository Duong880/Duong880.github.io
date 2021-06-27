let form_signUp = document.querySelector("#formSignUp")

form_signUp.onsubmit = (e)=>{
    e.preventDefault();

    let name = form_signUp.name.value.trim()
    let email = form_signUp.email.value.trim()
    let myInputPassword = form_signUp.myInputPassword.value.trim()
    let myInputPasswordCF = form_signUp.myInputPasswordCF.value.trim()

    let data_signUp = {
        name : name,
        email : email,
        myInputPassword : myInputPassword  
    }
    if(myInputPassword.length>=6){
        if(myInputPassword == myInputPasswordCF ){
            signUp_process(data_signUp)
            
        }else{
            setTextError ("Confirm password must be the same", "#myInputPasswordCF-error" )

        }
    }else{
        setTextError("Password must be more than 6 characters","#myInputPassword-error")
    }
}

let setTextError = (content,query)=>{
    document.querySelector(query).innerHTML= content
    setTimeout(function () {
        document.querySelector(query).innerHTML = ""
    }, 5000);
}

let signUp_process = async (data)=>{
    let email = data.email
    let password = data.myInputPassword  
    let name = data.name
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({
            displayName: name
        })
        await firebase.auth().currentUser.sendEmailVerification()
        sweetAlert('You sucessfully sign up','PLease check your email to confirm.')
    } catch (error) {
        let message = error.message
        sweetAlert('Sometihing went wrong',message)
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


