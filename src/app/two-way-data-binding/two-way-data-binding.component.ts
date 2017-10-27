import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  valorInicial: number = 10;

  pessoa = {
      nome: 'Gustavo',
      email: 'gustavo@email.com',
      idade: '20',
  };

  onMudouValor(evento) {
      console.log('Component Two Way Data Binding: ', evento);
  }

  constructor() { }

  ngOnInit() {
  }

}
