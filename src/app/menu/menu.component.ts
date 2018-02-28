import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = 'BNL';
  }

  ngOnInit() { }
}
