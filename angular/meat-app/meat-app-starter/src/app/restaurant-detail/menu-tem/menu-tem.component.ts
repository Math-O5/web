import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuTem } from './menu-tem.model';

@Component({
  selector: 'mt-menu-tem',
  templateUrl: './menu-tem.component.html',
})

export class MenuTemComponent implements OnInit {

  @Input() menuItem: MenuTem;
  @Output() add = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    // the object this.menuItem
    this.add.emit(this.menuItem);
  }
}
