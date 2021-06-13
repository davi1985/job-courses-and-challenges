import { Client } from '../Client.js';

// Abstract class
export class Account {
  constructor(initialBalance, client, agency) {
    if (this.constructor === Account) {
      throw new Error(
        'Account can not be instantiated because is Abstract class'
      );
    }

    this._balance = initialBalance;
    this._client = client;
    this._agency = agency;
  }

  set client(client) {
    if (client instanceof Client) {
      this._client = client;
    }
  }

  get client() {
    return this._client;
  }

  get balance() {
    return this._balance;
  }

  // abstract method
  withdraw(amount) {
    throw new Error('Abstract method not implemented');
  }

  _withdraw(amount, tax) {
    const finalAmount = tax * amount;

    if (this._balance >= finalAmount) {
      this._balance -= finalAmount;

      return amount;
    }

    return 0;
  }

  deposit(amount) {
    if (amount <= 0) {
      return;
    }

    this._balance += amount;
  }

  transfer(amount, account) {
    const amountToTransfer = this.withdraw(amount);

    account.deposit(amountToTransfer);
  }
}
