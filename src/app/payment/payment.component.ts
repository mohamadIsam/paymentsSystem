import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ServerServices } from "../services/server.services";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"]
})
export class PaymentComponent implements OnInit {
  errorMessage: string;
  paymentForm: FormGroup;
  currancyList: string[];

  constructor(private router: Router, private serverService: ServerServices) {}

  ngOnInit() {
    this.serverService.getListOfCurrancy().subscribe(data => {
      this.currancyList = data;
    });

    this.paymentForm = new FormGroup({
      amount: new FormControl(null, [
        Validators.required,
        this.amountValidation.bind(this)
      ]),
      currencyCode: new FormControl(null, [Validators.required]),
      destinationAccountNumber: new FormControl(null, [
        Validators.required,
        this.destinationAccountNumberValidation.bind(this)
      ]),
      paymentDescription: new FormControl(null, [
        this.descriptionValidation.bind(this)
      ]),
      sourceAccountNumber: new FormControl(null, [
        Validators.required,
        this.sourceAccountNumberValidation.bind(this)
      ])
    });
  }

  sourceAccountNumberValidation(control: FormControl) {
    if (
      control.value !== null &&
      (control.value.length < 6 || isNaN(control.value))
    ) {
      return { accountNumber: false };
    }
    return null;
  }

  destinationAccountNumberValidation(control: FormControl) {
    if (control.value !== null &&
        (control.value.length < 6 || isNaN(control.value) ||
      this.paymentForm.get('sourceAccountNumber').value === control.value)
    ) {
      return { accountNumber: false };
    }
    return null;
  }

  descriptionValidation(control: FormControl) {
    if (control.value !== null && control.value.length > 1000) {
      return { description: false };
    }
    return null;
  }

  amountValidation(control: FormControl) {
    if (control.value !== null && (isNaN(control.value) || control.value < 1)) {
      return { amount: false };
    }
    return null;
  }

  save() {
    if (this.paymentForm.valid) {
      this.serverService.addPayment(this.paymentForm.getRawValue()).subscribe(
        data => {
          // console.log(data);
          this.router.navigate(['/application']);
        },
        error => {
          this.errorMessage = error.error;
          console.log(error);
        }
      );
    }
  }

  cancel() {
    this.paymentForm.reset();
    this.router.navigate(["/application"]);
  }
}
