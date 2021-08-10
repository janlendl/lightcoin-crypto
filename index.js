
class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let perTransaction of this.transactions) {
      this.balance += perTransaction;
    }
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}


class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    // Tracks the time of transactions
    this.time = new Date();
    this.account.addTransaction(this);
  }
}


class Withdrawal extends Transaction {

  // commit() {
  //   this.account.balance -= this.amount;
  // }

  get value() {
    return -this.amount;
  }
}


class Deposit extends Transaction {

  // commit() {
  //   this.account.balance += this.amount;
  // }

  get value() {
    return this.amount;
  }
}






// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);



