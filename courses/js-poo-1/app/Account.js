import { Client } from './Client.js';

export class Account {
  static accountsLength = 0;

  _agency = 1001;

  _accountNumber = `00${Math.ceil(Math.random() * 10)}`;
  _client;
  _balance = 0;

  constructor(client) {
    this.clientValidate = client;

    Account.accountsLength += 1;
  }

  get agency() {
    return this._agency;
  }

  get balance() {
    return this._balance;
  }

  set clientValidate(client) {
    if (client instanceof Client) {
      return (this._client = client);
    }
  }

  get client() {
    return this._client;
  }

  get accountNumber() {
    return this._accountNumber;
  }

  withdraw(amount) {
    if (this._balance >= amount) {
      this._balance -= amount;

      return amount;
    }
  }

  deposit(amount) {
    if (!amount > 0) return;

    this._balance += amount;
  }

  transfer(amount, account) {
    const amountToTransfer = this.withdraw(amount);

    account.deposit(amountToTransfer);
  }
}
