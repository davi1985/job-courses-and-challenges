import { Account } from './Account.js';

export class AccountCurrency extends Account {
  static accountsLength = 0;

  constructor(client, agency) {
    super(0, client, agency);

    AccountCurrency.accountsLength += 1;
  }

  // overwrite withdraw method
  withdraw(amount) {
    let tax = 1.1;

    return this._withdraw(amount, tax);
  }
}
