import { Component, OnInit } from '@angular/core';
import { EVENTS } from '../test'
import { GameEvent } from '../GameEvent';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  EVENTS:GameEvent[]=EVENTS;
  constructor() { }

  ngOnInit(): void {
  }

}
