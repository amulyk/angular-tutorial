import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        right: 0
      })),
      state('close', style({
        right: '-300px'
      })),
      transition('* => *', animate('0.2s'))
    ])
  ]
})
export class MenuComponent implements OnInit {
  isOpen = true;

  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    this.isOpen = true;
  }

  hideMenu() {
    this.isOpen = false;
  }
}
