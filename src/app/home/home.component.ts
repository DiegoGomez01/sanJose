import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  openConversemos = false;
  openBarrio = false;
  openPropondremos = false;
  openNosotros = false;
  openSanJose = false;

  constructor() { }

  ngOnInit() {
    document.getElementById('divBackground').style.background = 'url("assets/images/general.jpg") no-repeat';
  }

  showConversemos(e = null) {
    this.defaultBackground();
    this.openConversemos = true;
    document.getElementById('divBackground').style.backgroundImage = 'url("assets/images/conversemos.jpg")';
  }

  showLoMejorDeMiBarrio(e = null) {
    this.defaultBackground();
    this.openBarrio = true;
    document.getElementById('divBackground').style.backgroundImage = 'url("assets/images/loMejorDeMiBarrio.jpg")';
  }

  showQueProponemos(e = null) {
    this.defaultBackground();
    this.openPropondremos = true;
    document.getElementById('divBackground').style.backgroundImage = 'url("assets/images/queProponemos.jpg")';
  }

  showQuienesSomos(e = null) {
    this.defaultBackground();
    this.openNosotros = true;
    document.getElementById('divBackground').style.backgroundImage = 'url("assets/images/quienesSomos.jpg")';
  }

  showSanJose(e = null) {
    this.defaultBackground();
    this.openSanJose = true;
    document.getElementById('divBackground').style.backgroundImage = 'url("assets/images/sanJoseInteligente.jpg")';
  }

  defaultBackground() {
    this.openNosotros = false;
    this.openBarrio = false;
    this.openConversemos = false;
    this.openSanJose = false;
    this.openPropondremos = false;
    document.getElementById('divBackground').style.backgroundImage = 'url("assets/images/general.jpg")';
  }

}
