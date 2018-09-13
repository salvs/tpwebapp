import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Menu } from './menu';
import { MENUS } from './menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus = MENUS;
  selectedMenu = new Menu;
  users:any = false;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }

}
