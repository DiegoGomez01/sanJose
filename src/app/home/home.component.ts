import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test() {
    document.getElementById('divBackground').style.backgroundImage = 'url("/assets/images/conversemos.jpg")';
  }

  defaultBackground() {
    document.getElementById('divBackground').style.backgroundImage = 'url("/assets/images/general.jpg")';
  }

}
