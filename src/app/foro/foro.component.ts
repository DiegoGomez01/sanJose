import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  commentaries=[{
    id: 1,
    image: '../../assets/images/general.jpg',
    name: 'Juan Camilo Forero',
    date: 'Sab. 23 septiembre 2018 - 03:20 pm',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
  },
  {
    id: 1,
    image: '../../assets/images/general.jpg',
    name: 'Juan Camilo Forero',
    date: 'Sab. 23 septiembre 2018 - 03:20 pm',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
  },
  {
    id: 1,
    image: '../../assets/images/general.jpg',
    name: 'Juan Camilo Forero',
    date: 'Sab. 23 septiembre 2018 - 03:20 pm',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
  }];

  constructor() { }

  ngOnInit() {
  }

}
