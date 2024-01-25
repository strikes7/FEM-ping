window.onload = selectElements();

function selectElements(){
    const signButton = document.getElementById("sign-in-btn");
    
    signButton.addEventListener("click",validateEmail);
}

function validateEmail(e){
    e.preventDefault();
    const email = document.getElementById("email");
    const regEx = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
    const errorMessage = document.getElementById("form-error-message");
    const isTrue = regEx.test(email.value);
    
    errorMessage.setAttribute("aria-hiden",isTrue);
    email.setAttribute("data-is-valid",isTrue);
}