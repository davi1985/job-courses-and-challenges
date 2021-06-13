import { Account } from './Account.js';

export class SavingsAccount extends Account {
  constructor(balance, client, agency) {
    super(balance, client, agency);
  }

  // ovewrite abstract method
  withdraw(amount) {
    const tax = 1.02;

    return this._withdraw(amount, tax);
  }
}
