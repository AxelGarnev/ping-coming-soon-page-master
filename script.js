const subscribeButton = document.querySelector('.subscribe');

function emailValidation(e) {
    
    const userEmail = document.getElementById("email");
    const errorMsg = document.getElementById("error");
    
    e.preventDefault()

    if (userEmail.value != "") {
        if (userEmail.validity.valid) {
            errorMsg.className ="";
            userEmail.className = "";
        } else {
            errorMsg.className = "visible";
            userEmail.className = "wrong"
        }
    } else {
        errorMsg.className = "visible";
            userEmail.className = "wrong"
    }
    }

subscribeButton.addEventListener("click", emailValidation);