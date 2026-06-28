var botaoMenu = document.getElementById('btnMenu');
var menuLinks = document.getElementById('menuLinks');
var btnTema = document.getElementById('trocarTema');
var form = document.getElementById('formContato');
var nomeInput = document.getElementById('nome');
var emailInput = document.getElementById('email');
var mensagemInput = document.getElementById('mensagem');

// menu simples pra celular
botaoMenu.addEventListener('click', function () {
    menuLinks.classList.toggle('aberto');
});

var linksDoMenu = document.querySelectorAll('.links a');

for (var i = 0; i < linksDoMenu.length; i++) {
    linksDoMenu[i].addEventListener('click', function () {
        menuLinks.classList.remove('aberto');
    });
}

// troca de tema bem direta
btnTema.addEventListener('click', function () {
    document.body.classList.toggle('claro');

    if (document.body.classList.contains('claro')) {
        btnTema.textContent = 'Escuro';
    } else {
        btnTema.textContent = 'Claro';
    }
});

function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setErro(input, erroId, mensagem) {
    document.getElementById(erroId).textContent = mensagem;
    input.classList.add('input-erro');
}

function limpaErro(input, erroId) {
    document.getElementById(erroId).textContent = '';
    input.classList.remove('input-erro');
}

function validarNome() {
    var valor = nomeInput.value.trim();

    if (valor === '') {
        setErro(nomeInput, 'erroNome', 'Digite seu nome.');
        return false;
    }

    limpaErro(nomeInput, 'erroNome');
    return true;
}

function validarEmail() {
    var valor = emailInput.value.trim();

    if (valor === '') {
        setErro(emailInput, 'erroEmail', 'Digite seu e-mail.');
        return false;
    }

    if (!emailValido(valor)) {
        setErro(emailInput, 'erroEmail', 'E-mail inválido.');
        return false;
    }

    limpaErro(emailInput, 'erroEmail');
    return true;
}

function validarMensagem() {
    var valor = mensagemInput.value.trim();

    if (valor === '') {
        setErro(mensagemInput, 'erroMensagem', 'Digite uma mensagem.');
        return false;
    }

    limpaErro(mensagemInput, 'erroMensagem');
    return true;
}

function limpaRetorno() {
    document.getElementById('retornoForm').textContent = '';
}

// vai limpando o erro enquanto a pessoa corrige
nomeInput.addEventListener('input', function () {
    limpaRetorno();
    validarNome();
});

emailInput.addEventListener('input', function () {
    limpaRetorno();
    validarEmail();
});

mensagemInput.addEventListener('input', function () {
    limpaRetorno();
    validarMensagem();
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var nomeOk = validarNome();
    var emailOk = validarEmail();
    var mensagemOk = validarMensagem();

    if (!nomeOk || !emailOk || !mensagemOk) {
        document.getElementById('retornoForm').textContent = 'Confere os campos aí antes de enviar.';
        return;
    }

    document.getElementById('retornoForm').textContent = 'Mensagem enviada com sucesso!';
    alert('Mensagem enviada com sucesso!');
    form.reset();
    limpaErro(nomeInput, 'erroNome');
    limpaErro(emailInput, 'erroEmail');
    limpaErro(mensagemInput, 'erroMensagem');
});
