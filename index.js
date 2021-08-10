
class Account {

  constructor(username) {
    this.username = username;

    // Have the account balance start at $0 since that makes more sense
    this.balance = 0;
  }
}


class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
}


class Withdrawal extends Transaction {

  commit() {
    this.account.balance -= this.amount;
  }

}


class Deposit extends Transaction {

  commit() {
    this.account.balance += this.amount;
  }
}






// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('snow-patrol');

console.log('New Account Created: ', myAccount.username);

t1 = new Deposit(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);


Account2 = new Account('Lendl');
t4 = new Deposit(400, Account2);
t4.commit();
console.log('Transaction 4', t4);

t5 = new Withdrawal(150, Account2)
t5.commit();

console.log(Account2);
console.log(myAccount)



