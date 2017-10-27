import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

    valorInput = '';
    valorSalvo = '';
    isMouseOver = false;

  constructor() { }

  botaoClicado() {
      alert('Hello!');
  }

  onMouseOverOut() {
      this.isMouseOver = !this.isMouseOver;
  }

  salvarValor(valor) {
      this.valorSalvo = valor;
  }

  onKeyUp(evento: KeyboardEvent) {
      this.valorInput = (<HTMLInputElement>evento.target).value;
  }

  ngOnInit() {
  }

}
