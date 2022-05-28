import { Component, OnInit, Input } from '@angular/core';
import { GameEvent } from '../GameEvent';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.css']
})
export class ListaItemComponent implements OnInit {
  @Input() index!:number;
  @Input() event!:GameEvent;
  constructor() { }

  ngOnInit(): void {
  }

}
