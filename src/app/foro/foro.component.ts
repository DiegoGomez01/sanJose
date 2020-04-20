import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  modeList = true;
  foroForm: FormGroup;
  submitted = false;
  loading = false;

  commentaries = [{
    id: 1,
    image: '/sanJose/assets/images/general.jpg',
    name: 'Juan Camilo Forero',
    date: 'Sab. 23 septiembre 2018 - 03:20 pm',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
  },
  {
    id: 1,
    image: '/sanJose/assets/images/general.jpg',
    name: 'Juan Camilo Forero',
    date: 'Sab. 23 septiembre 2018 - 03:20 pm',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
  },
  {
    id: 1,
    image: '/sanJose/assets/images/general.jpg',
    name: 'Juan Camilo Forero',
    date: 'Sab. 23 septiembre 2018 - 03:20 pm',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
  }];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.foroForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      commentary: ['', [Validators.required, Validators.maxLength(255)]],
      image: ['', []]
    });
  }

  get f() { return this.foroForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.foroForm.controls);
    if (this.foroForm.invalid) {
      return;
    }

    alert('enviar Datos');
  }

  showForm() {
    this.modeList = false;
  }

  showList() {
    this.modeList = true;
  }

}
