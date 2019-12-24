export class Account {
  accountHolderName: string;
  accountHolderPhoneNumber: string;
  accountDescription: string;
  accountNumber: number;
  id: string;

  constructor(
    accountHolderName: string,
    accountHolderPhoneNumber: string,
    accountDescription: string,
    accountNumber: number,
    id: string
  ) {
    this.accountHolderName = accountHolderName;
    this.accountHolderPhoneNumber = accountHolderPhoneNumber;
    this.accountDescription = accountDescription;
    this.accountNumber = accountNumber;
    this.id = id;
  }
}
