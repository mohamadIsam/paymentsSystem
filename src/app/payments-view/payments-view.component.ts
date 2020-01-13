import { Component, OnInit } from '@angular/core';
import { ServerServices } from '../services/server.services';
import { Payment } from '../share/payment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments-view',
  templateUrl: './payments-view.component.html',
  styleUrls: ['./payments-view.component.scss']
})
export class PaymentsViewComponent implements OnInit {

  payments: Payment[];
  errorMessage: string;

  constructor(private serverService: ServerServices, private router: Router) { }

  ngOnInit() {
    this.serverService.getAllPayments().subscribe(data => {
      this.payments = data;
    }, error => {
      this.errorMessage = error.message;
    });
  }

  openDocument(id: string) {
    this.router.navigate(['payment', id]);
  }

}
