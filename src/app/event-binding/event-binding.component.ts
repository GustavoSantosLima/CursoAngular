import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

    valorInput = '';

  constructor() { }

  botaoClicado() {
      alert('Hello!');
  }

  onKeyUp(evento: KeyboardEvent) {
      this.valorInput = (<HTMLInputElement>evento.target).value;
  }

  ngOnInit() {
  }

}
