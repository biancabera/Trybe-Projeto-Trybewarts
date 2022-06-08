const email = document.getElementById('email');
const senha = document.getElementById('password');
const button = document.getElementById('button');
function enviar() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
button.addEventListener('click', enviar);

// Requisito 18
const submit = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
// https://stackoverflow.com/questions/7526601/setattributedisabled-false-changes-editable-attribute-to-false && https://pt.stackoverflow.com/questions/307752/habilitar-desabilitar-um-bot%C3%A3o-se-pelo-menos-um-checkbox-for-marcado#:~:text=Usando%20document.,onclick%3D%22ativar()%22%20.
function interrompendo() {
  // o .checked confere se o que está sendo avaliado antes está marcado ou não
  if (checkbox.checked === false) {
    submit.setAttribute('disabled', true);
  } else {
    submit.removeAttribute('disabled');
  }
}
window.onload = interrompendo;
checkbox.addEventListener('click', interrompendo);

// Requisito 20
// const counter = document.querySelectorAll('counter');
// let caracteres = 500;
// const textarea = document.getElementById('textarea');
// function contador() {
//   for (let index = 0; index < caracteres; index -= 1) {
//     if (textarea.length !== 0) {
//       counter -= 1;
//     };
//   };
// }
// textarea.addEventListener('keyup', contador);
