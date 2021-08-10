
class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let perTransaction of this.transactions) {
      balance += perTransaction.value;
    }
    return balance;
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
    if(!(this.isAllowed())) {
      console.log('Insufficient Balance, you only have', myAccount.balance);
      return false;
    }
    // Tracks the time of transactions
    this.time = new Date();
    this.account.addTransaction(this);
    return true;
  }
}


class Withdrawal extends Transaction {

  isAllowed() {
    return (this.account.balance - this.amount >= 0);
    }

  get value() {
    return -this.amount;
  }
}


class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

  isAllowed() {
    return true
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('Billy Bob');

console.log('Starting Account Balance: ', myAccount.balance);

const t1 = new Deposit(500.00, myAccount);
console.log('Commit result:', t1.commit());
console.log('Account Balance: ', this.balance);

const t2 = new Withdrawal(600.00, myAccount);
console.log('Commit result:', t2.commit());
console.log('Account Balance: ', myAccount.balance);

console.log('Withdrawal for 9.99 should be allowed...');
const t3 = new Withdrawal(9.99, myAccount);
console.log('Commit result:', t3.commit());

console.log('Ending Account Balance: ', myAccount.balance);
console.log("Lookings like I'm broke again");

console.log('Account Transaction History: ', myAccount.transactions);



