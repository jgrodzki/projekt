import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { GameEvent } from '../GameEvent';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  events!:GameEvent[];
  constructor(private eventsService:EventsService) { }

  ngOnInit(): void {
      this.eventsService.getEvents().subscribe((events)=>this.events=events);
  }
}
