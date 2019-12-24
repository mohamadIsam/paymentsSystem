import { Component, OnInit } from '@angular/core';
import { ServerServices } from '../services/server.services';
import { Router, Params, ActivatedRoute } from '@angular/router'
import { Payment } from '../share/payment.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  payment: Payment;
  constructor(private serverService: ServerServices, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.serverService.getPayment(params['id']).subscribe(
        data => {
          this.payment = data;
        }
      );
    });
  }

  cancel() {
    this.router.navigate(['/application']);
  }

}
