import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import { EventsService } from '../events.service';
import { GameEvent } from '../GameEvent';
import { Player } from '../Player';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  events!:GameEvent[];
  nameInput!:string;
  nickNameInput!:string;
  lastNameInput!:string;
  emailInput!:string;
  mobileInput!:number;
  eventInput!:number;
  constructor(private eventsService:EventsService) { }
  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((events)=>this.events=events);
  }
  onSubmit()
  {
    const newPlayer:Player=
    {
      name:this.nameInput,
      lastName:this.lastNameInput,
      email:this.emailInput,
      mobile:this.mobileInput,
      nickName:this.nickNameInput
    }
    this.eventsService.addPlayer(newPlayer,this.eventInput);
  }
}
