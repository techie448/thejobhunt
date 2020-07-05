import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  term: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  search(term: string): void {
    if (term) { this.router.navigate(['/jobs/' + term]); }
    else { this.router.navigate(['jobs']); }
  }
}
