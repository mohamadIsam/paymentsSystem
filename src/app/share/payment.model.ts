export class Payment {
  amount: number;
  currencyCode: string;
  destinationAccountNumber: number;
  id: string;
  paymentDescription: string;
  sourceAccountNumber: number;

  constructor(
    amount: number,
    currencyCode: string,
    destinationAccountNumber: number,
    id: string,
    paymentDescription: string,
    sourceAccountNumber: number
  ) {
    this.amount = amount;
    this.currencyCode = currencyCode;
    this.paymentDescription = paymentDescription;
    this.destinationAccountNumber = destinationAccountNumber;
    this.id = id;
    this.sourceAccountNumber = sourceAccountNumber;
  }
}
