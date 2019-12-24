import { Component, OnInit } from '@angular/core';
import { ServerServices } from '../services/server.services';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Account } from '../share/account.model';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  public account: Account;

  constructor(private serverService: ServerServices, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.serverService.getAccount(params['id']).subscribe(data => {
        this.account = data;
      });
    });
  }

  cancel() {
    this.router.navigate(['/application']);
  }
}
