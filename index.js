let balance = 13500;
let job = true;
let credit = 9000;

if (job === true) {
}

class Life {
  constructor(job, balance, credit, installment) {
    this.job = job;
    this.balance = balance;
    this.credit = credit;
    this.installment = installment;
  }

  calculate() {
    if (this.job === true && this.installment === true) {
      let creditAmountandExpenses = 6000;
      this.balance = this.balance + 10000;
      this.balance = this.balance - creditAmountandExpenses;
      this.credit = this.credit - 1000;
      return `Job is secure and remaining balance is ${this.balance} and credit to be paid is ${this.credit}`;
    }

    if (this.job === false && this.installment === true) {
      let creditAmountandExpenses = 5000;
      this.balance = this.balance + 5000;
      this.balance = this.balance - creditAmountandExpenses;
      this.credit = this.credit - 1000;
      return `Job is Gone and remaining balance is ${this.balance} and credit to be paid is ${this.credit}`;
    }

    if (this.job === true && this.installment === false) {
      let creditAmountandExpenses = 9000 + 5000;
      this.balance = this.balance + 10000;
      this.balance = this.balance - creditAmountandExpenses;
      this.credit = this.credit - 9000;
      return `Job is Secure and remaining balance is ${this.balance} and credit to be paid is ${this.credit}`;
    }

    if (this.job === false && this.installment === false) {
      let creditAmountandExpenses = 9000 + 4000;
      this.balance = this.balance + 5000;
      this.balance - this.balance - cre;
    }
  }
}
