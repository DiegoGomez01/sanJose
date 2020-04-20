import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    @Output() showQueProponemos= new EventEmitter();
    @Output() showQuienesSomos= new EventEmitter();
    @Output() showSanJose= new EventEmitter();

    constructor() {}
    ngOnInit() {

    }

    openQueProponemos() {
        this.showQueProponemos.emit('');
    }

    openQuienesSomos() {
        this.showQuienesSomos.emit('');
    }

    openSanJose() {
        this.showSanJose.emit('');
    }
}
