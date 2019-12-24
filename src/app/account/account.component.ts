import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ServerServices } from "../services/server.services";
import { Router } from '@angular/router';

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"]
})
export class AccountComponent implements OnInit {
  errorMessage: string;
  accountForm: FormGroup;

  constructor(private serverService: ServerServices, private router: Router) {}

  ngOnInit() {
    this.accountForm = new FormGroup({
      accountNumber: new FormControl(null, [
        Validators.required,
        this.accountNumberValidation.bind(this)
      ]),
      accountHolderName: new FormControl(null, [Validators.required]),
      accountHolderPhoneNumber: new FormControl(null),
      accountDescription: new FormControl(null, [this.descriptionValidation.bind(this)])
    });
  }

  accountNumberValidation(control: FormControl) {
    if (control.value !== null && (control.value.length < 6 || isNaN(control.value))) {
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

  save() {
    console.log(this.accountForm.valid);
    if (this.accountForm.valid !== false) {
      this.serverService.addAccount(this.accountForm.getRawValue()).subscribe(
        data => {
          // console.log(data);
          this.router.navigate(['/application']);
        },
        error => {
          this.errorMessage = error.error;
        }
      );
    }
  }

  cancel() {
    this.accountForm.reset();
    this.router.navigate(['/application']);
  }
}
