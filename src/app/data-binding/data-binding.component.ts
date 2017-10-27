import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

    url = 'http://loiane.traning';
    cursoAngular = true;
    urlImagem = 'http://fasam.edu.br/wp-content/uploads/2017/09/marotona-de-programa%C3%A7%C3%A3o-640x380.jpg';

    getValor() {
        return 1;
    }

    getBoolean() {
        return true;
    }

    constructor() { }

    ngOnInit() {
    }

}
