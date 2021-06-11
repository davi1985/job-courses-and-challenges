import { Client } from './Client.js';
import { Account } from './Account.js';

const form = document.querySelector('form');
const welcome = document.querySelector('.welcome');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let name = event.target[0].value;
  let cpf = event.target[1].value;
  let initialDeposit = event.target[2].value;

  const client = new Client(name, cpf);
  const account = new Account(client);

  if (initialDeposit !== '') {
    account.deposit(Number(initialDeposit));
  }

  welcome.innerHTML += `
  <div class="info">
    <small>Detalhes da criação da sua conta:</small>
    <p>Olá ${client.name}, estamos muito feliz em tê-lo como nosso cliente.</p>
    
    <p>Veja seus dados:</p>
    <span>Agencia: ${account.agency}</span>
    <span>Conta: ${account.accountNumber}</span>
    <span>Saldo:  ${new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(account.balance)}</span>
  </div>
  `;

  event.target[0].value = '';
  event.target[1].value = '';
  event.target[2].value = '';
});
