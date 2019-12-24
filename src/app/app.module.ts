import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { PaymentComponent } from './payment/payment.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ApplicationComponent } from './application/application.component';
import { AccountsViewComponent } from './accounts-view/accounts-view.component';
import { PaymentsViewComponent } from './payments-view/payments-view.component';
import { ServerServices } from './services/server.services';
import { Error404Component } from './error404/error404.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    PaymentComponent,
    DropdownDirective,
    ApplicationComponent,
    AccountsViewComponent,
    PaymentsViewComponent,
    Error404Component,
    AccountDetailsComponent,
    PaymentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServerServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
