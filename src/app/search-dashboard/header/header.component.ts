import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
  <div fxLayout="row" fxLayoutAlign="start center">
  <div fxFlex="30">1</div>
  <div fxFlex="30">2</div>
  </div>
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
