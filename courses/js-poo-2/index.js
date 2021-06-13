import { Client } from './Client.js';
// import { AccountCurrency } from './Accounts/AccountCurrency.js';
// import { SavingsAccount } from './Accounts/SavingsAccount.js';
// import { SalaryAccount } from './Accounts/SalaryAccount.js';

// const client1 = new Client('Ricardo', 11122233309);
// const client2 = new Client('Alice', 88822233309);

// const account1 = new AccountCurrency(1001, client1);
// const account2 = new SavingsAccount(100, 1001, client2);

// // console.log(account1.deposit(10));
// // console.log(account1.withdraw(5));
// // console.log(account1);
// // console.log(account2);

// const test = new SalaryAccount(client1);
// test.deposit(100);
// test.withdraw(10);

// console.log(test);

import { Manager } from './Employees/Manager.js';
import { Director } from './Employees/Director.js';
import { Authentication } from './Authentication.js';

const director = new Director('Davi', 10000, 12345678900);
director.registerPassword('123456');

const manager = new Manager('Joelma', 5000, 12345678911);
manager.registerPassword('1234');

const client = new Client('Davi', 12312312300, '1234');

const isLoggedManager = Authentication.login(manager, '1234');
const isLoggedDirector = Authentication.login(director, '123456');
const isLoggedClient = Authentication.login(client, '123');

console.log(isLoggedManager, isLoggedDirector, isLoggedClient);
