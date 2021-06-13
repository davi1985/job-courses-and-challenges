import { Account } from './Account.js';

export class SalaryAccount extends Account {
  constructor(client) {
    super(0, client, 1001);
  }

  // ovewrite abstract method
  withdraw(amount) {
    const tax = 1.01;

    return this._withdraw(amount, tax);
  }
}
