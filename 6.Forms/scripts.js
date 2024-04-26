const firstInput = document.querySelector('#firstname')
const displayFirst = document.getElementById("display-firstname")


function pressInputFirst() {

    let firstName = document.getElementById("firstname").value;

    displayFirst.textContent = firstName;
}

firstInput.addEventListener('keyup', pressInputFirst )


// -----------------------------------

const hiddenSection = document.getElementById("a-hard-truth")
const ageInput = document.querySelector('#age')

function pressInputSecond() {
        let age = document.getElementById("age").value;

        if (age >= 18) {
            hiddenSection.style.visibility = 'visible';
        } else {
            hiddenSection.style.visibility = 'hidden';
        }
}

ageInput.addEventListener('keyup', pressInputSecond);


// ---------------------------------------

const pwdBox = document.querySelector('#pwd')
const pwdBoxConfirm = document.querySelector('#pwd-confirm')


function passwordInput() {
    let password = document.getElementById('pwd').value;
    let passwordConfirm = document.getElementById('pwd-confirm').value;

    if (password === passwordConfirm && password.length >= 6 && passwordConfirm.length >= 6){
        pwdBox.style.border = 'solid green';
        pwdBoxConfirm.style.border = 'solid green';

    } else if (password !== passwordConfirm && password.length < 6 && passwordConfirm.length < 6) {
        pwdBox.style.border = 'solid red';
        pwdBoxConfirm.style.border = 'solid red';
    }
}

pwdBox.addEventListener('keyup', passwordInput )
pwdBoxConfirm.addEventListener('keyup', passwordInput )


// -----------------------------------------

const body = document.querySelector('body')
const toggle = document.querySelector('#toggle-darkmode')
const toggleChildren = toggle.children;

const dark = toggleChildren[0].value
const light = toggleChildren[1].value

toggle.addEventListener('change', toggleDark)

function toggleDark() {
    if (toggle.value === 'dark') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white'
    } else if (toggle.value === 'light') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black'
    }
}

