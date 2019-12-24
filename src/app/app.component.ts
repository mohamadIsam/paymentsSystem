import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PaymentsSystem';
  userName: string;

  constructor(private router: Router) {  }

  ngOnInit() {
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
      this.router.navigate(['/application']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.clear();
    location.reload();
  }
}
