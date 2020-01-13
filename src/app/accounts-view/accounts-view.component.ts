import { Component, OnInit } from '@angular/core';
import { ServerServices } from '../services/server.services';
import { Router } from '@angular/router';
import { Account } from '../share/account.model';

@Component({
  selector: 'app-accounts-view',
  templateUrl: './accounts-view.component.html',
  styleUrls: ['./accounts-view.component.scss']
})
export class AccountsViewComponent implements OnInit {
  accounts: any;
  errorMessage: string;
  constructor(private serverService: ServerServices, private router: Router) {}

  ngOnInit() {
    this.serverService.getAllAccounts().subscribe(
      (data: Account[]) => {
        this.accounts = data;
      },
      error => {
        this.errorMessage = error.message;
      }
    );
  }

  openDocument(id: any) {
    this.router.navigate(['/account', id]);
  }
}
