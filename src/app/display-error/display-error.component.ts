import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-error',
  templateUrl: './display-error.component.html',
  styleUrls: ['./display-error.component.scss']
})
export class DisplayErrorComponent implements OnInit {

  @Input('message') errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
