import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    document.getElementById('bg-opacity').style.background = 'linear-gradient(rgba(66,66,66, .5), rgba(66,66,66, .5)), url("assets/images/general.jpg")';
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
