import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  isOpen = '';

  ngOnInit() {
  }

  toggled(event) {
    if (event) {
        console.log('is open');
        this.isOpen = 'is open';
    } else {
      console.log('is closed');
      this.isOpen = 'is closed';
    }
  }

}
