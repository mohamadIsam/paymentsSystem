import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ServerServices } from "../services/server.services";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(private serverService: ServerServices, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  login() {
    this.serverService.getUserJSON().subscribe(data => {
      if (
        this.loginForm.get("userName").value.toUpperCase() ===
          data["userName"].toUpperCase() &&
        this.loginForm.get("password").value === data["password"]
      ) {
        localStorage.setItem("userName",data["userName"]);
        location.reload();
      } else {
        this.errorMessage = "Failed to login, Please try again.";
      }
    });
  }
}
