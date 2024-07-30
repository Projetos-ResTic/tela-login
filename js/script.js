function transitionToLogin() {
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');
    const btnLogin = document.getElementById('entrar');
    const btnRegister = document.getElementById('cadastro');

    if (formRegister.classList.contains('hidden')) {
        return;
    }
    formRegister.classList.add('hidden');
    formLogin.classList.remove('hidden');
    btnLogin.classList.add('active');
    btnRegister.classList.remove('active');
}

function transitionToRegister() {
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');
    const btnLogin = document.getElementById('entrar');
    const btnRegister = document.getElementById('cadastro');

    if (formLogin.classList.contains('hidden')) {
        return;
    }
    formLogin.classList.add('hidden');
    formRegister.classList.remove('hidden');
    btnRegister.classList.add('active');
    btnLogin.classList.remove('active');
}