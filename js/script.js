function transitionToLogin() {
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');
    const btnLogin = document.getElementById('entrar');
    const btnRegister = document.getElementById('cadastro');
    const img2 = document.getElementById('img2');
    const img1 = document.getElementById('img1');

    if (formRegister.classList.contains('hidden')) {
        return;
    }

    formRegister.classList.add('hidden');
    formLogin.classList.remove('hidden');
    btnLogin.classList.add('active');
    btnRegister.classList.remove('active');
    img1.classList.remove('hidden')
    img2.classList.add('hidden');
}

function transitionToRegister() {
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');
    const btnLogin = document.getElementById('entrar');
    const btnRegister = document.getElementById('cadastro');
    const img2 = document.getElementById('img2');
    const img1 = document.getElementById('img1');

    if (formLogin.classList.contains('hidden')) {
        return;
    }

    formLogin.classList.add('hidden');
    formRegister.classList.remove('hidden');
    btnRegister.classList.add('active');
    btnLogin.classList.remove('active');
    img1.classList.add('hidden')
    img2.classList.remove('hidden');
}



function mudarCorDeFundoEscuro(){
    const container = document.getElementById('container')
    const alterarBody = document.getElementById('alterar-body')
    const iconSol = document.getElementById('icon-sol')
    const iconLua = document.getElementById('icon-lua')
    const branco = document.getElementById('branco')

    iconSol.classList.remove('hidden')
    iconLua.classList.add('hidden')
    container.style.backgroundColor = "#0c0c0cc9"
    alterarBody.style.backgroundColor = "#0c0c0cc9"
}

function mudarCorDeFundoClaro(){
    const container = document.getElementById('container')
    const alterarBody = document.getElementById('alterar-body')
    const iconSol = document.getElementById('icon-sol')
    const iconLua = document.getElementById('icon-lua')

    iconSol.classList.add('hidden')
    iconLua.classList.remove('hidden')
    container.style.backgroundColor = "white"
    alterarBody.style.backgroundColor = "white"
    
}

function recuperarConta(){
    const formRecuperar = document.getElementById('form-recuperar')
    const formLogin = document.getElementById('form-login')
    const formRegister = document.getElementById('form-register');
    const botoes = document.getElementById('botoes')

    const entrar = document.getElementById('entrar')
    const cadastro = document.getElementById('cadastro')

    formRecuperar.classList.remove('hidden')
    formLogin.classList.add('hidden')
    formRegister.classList.add('hidden')
    botoes.classList.add('hidden')
    entrar.classList.add('hidden')
    cadastro.classList.add('hidden')

}

