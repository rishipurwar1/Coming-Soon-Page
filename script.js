const email = document.getElementById('email');
const btn = document.getElementById('btn');
const input = document.getElementById('email');
const small = document.getElementById('error');


function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        input.classList.remove('error-input');
        small.classList.remove('error')
    } else {
        input.classList.add('error-input');
        small.classList.add('error')
        console.log("error");
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    checkEmail(email);
});