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
  }

  showConversemos() {
    this.openConversemos = true;
    document.getElementById('divBackground').style.backgroundImage = 'url("/assets/images/conversemos.jpg")';
  }

  showLoMejorDeMiBarrio() {
    this.openBarrio = true;
    document.getElementById('divBackground').style.backgroundImage = 'url("/assets/images/loMejorDeMiBarrio.jpg")';
  }

  showQueProponemos() {
    this.openPropondremos = true;
    document.getElementById('divBackground').style.backgroundImage = 'url("/assets/images/queProponemos.jpg")';
  }

  showQuienesSomos() {
    this.openNosotros = true;
    document.getElementById('divBackground').style.backgroundImage = 'url("/assets/images/quienesSomos.jpg")';
  }

  showSanJose() {
    this.openSanJose = true;
    document.getElementById('divBackground').style.backgroundImage = 'url("/assets/images/sanJoseInteligente.jpg")';
  }

  defaultBackground() {
    this.openNosotros = false;
    this.openBarrio = false;
    this.openConversemos = false;
    this.openSanJose = false;
    this.openPropondremos = false;
    document.getElementById('divBackground').style.backgroundImage = 'url("/assets/images/general.jpg")';
  }

}
