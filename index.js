'use strict'
const emailInput = document.getElementsByClassName('email');
const button = document.querySelector('.Get started');
console.log(button);
const Get = document.addEventListener('click');
function getUserInput(event){
    event.preventDefault()
    console.log(emailInput.value)
}
button.addEventListener('click',getUserInput);
