const fliper = document.getElementById('fliper');
const toSignUp = document.getElementById('toSignUp');
const toLogin = document.getElementById('toLogin');

toSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    fliper.classList.add('flipped');
});

toLogin.addEventListener('click', (e) => {
    e.preventDefault();
    fliper.classList.remove('flipped');
});