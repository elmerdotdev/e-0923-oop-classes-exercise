class BankAccount {
  constructor(owner, initialBalance) {
    this._owner = owner
    this.balance = initialBalance // call setter
  }

  get owner() {
    return this._owner
  }

  set owner(newOwner) {
    this._owner = newOwner
  }

  get balance() {
    return this._balance
  }

  set balance(newBalance) {
    if (newBalance < 0) {
      console.log('Balance cannot be negative')
    } else {
      this._balance = newBalance
    }
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log('Deposit amount must be positive')
    } else {
      this.balance += amount
      console.log(`Deposited ${amount}. New balance is $${this.balance}`)
    }
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log('Withdrawal amount must be positive.')
    } else if (amount > this.balance) {
      console.log('Insufficient funds for this withdrawal')
    } else {
      this.balance -= amount
      console.log(`Withdrew ${amount}. Remaining balance is ${this.balance}`)
    }
  }

  displayBalance() {
    return `The balance of ${this.owner} is ${this.balance}.`
  }
}

const johnsAccount = new BankAccount('John Smith', -100)
console.log(johnsAccount.displayBalance())
johnsAccount.deposit(2000)
johnsAccount.withdraw(500)