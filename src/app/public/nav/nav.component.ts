import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  toggleState: boolean;

  toggleNav() {
    this.toggleState = !this.toggleState;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
