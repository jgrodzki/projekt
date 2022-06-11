import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, AbstractControl} from '@angular/forms'
import { EventsService } from '../events.service';
import { GameEvent } from '../GameEvent';
import { Player } from '../Player';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  playerForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    nickName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    mobile:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{9}$')]),
    event:new FormControl('',[Validators.required])
  });
  events!:GameEvent[];
  constructor(private eventsService:EventsService) { }
  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((events)=>this.events=events);
  }
  onSubmit()
  {
    const newPlayer:Player=
    {
      name:this.playerForm.value.name,
      nickName:this.playerForm.value.nickName,
      lastName:this.playerForm.value.lastName,
      email:this.playerForm.value.email,
      mobile:this.playerForm.value.mobile
    }
    this.eventsService.addPlayer(newPlayer,this.playerForm.value.event);
  }
  get playerFormControls()
  {
    return this.playerForm.controls;
  }
}
