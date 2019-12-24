import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { PaymentComponent } from './payment/payment.component';
import { ApplicationComponent } from './application/application.component';
import { AccountsViewComponent } from './accounts-view/accounts-view.component';
import { PaymentsViewComponent } from './payments-view/payments-view.component';
import { Error404Component } from './error404/error404.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'account', component: AccountComponent},
  {path: 'application', component: ApplicationComponent, children: [
    {path: 'accounts', component: AccountsViewComponent},
    {path: 'payments', component: PaymentsViewComponent},
    {path: '', redirectTo: 'accounts', pathMatch: 'full'}
  ]},
  {path: 'account/:id', component: AccountDetailsComponent},
  {path: 'payment/:id', component: PaymentDetailsComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
