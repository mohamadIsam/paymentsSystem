import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../share/account.model';
import { Payment } from '../share/payment.model';
import { Router } from '@angular/router';

@Injectable()
export class ServerServices {
  private serverURL = 'http://localhost:8080/payments-system';

  constructor(private http: HttpClient, private router: Router) {}

  getAllAccounts() {
    return this.http.get <Account[]>(this.serverURL + '/account', { observe: 'body', responseType: 'json'});
  }

  getAllPayments() {
    return this.http.get<Payment[]>(this.serverURL + '/payment', { observe: 'body', responseType: 'json'});
  }

  getAccount(accountId: string) {
    return this.http.get<Account>(this.serverURL + '/account/' + accountId, { observe: 'body', responseType: 'json'});
  }

  addAccount(accountValues: any[]) {
    return this.http.post(this.serverURL + '/account/add', accountValues);
  }

  addPayment(paymentValue: any[]) {
    return this.http.post(this.serverURL + '/payment/add', paymentValue);
  }

  getPayment(paymentId: string) {
    return this.http.get<Payment>(this.serverURL + '/payment/' + paymentId);
  }

  getListOfCurrancy() {
    return this.http.get<string[]>(this.serverURL + '/currency');
  }

  getUserJSON() {
    return this.http.get('assets/users.json');
  }
}
