import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tjh-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output()
  toggleClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(){
    this.toggleClicked.emit();
  }

}
