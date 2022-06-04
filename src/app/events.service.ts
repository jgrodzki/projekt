import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs';
import { GameEvent } from './GameEvent';
import { Player } from "./Player";

const httpOptions=
{
    headers:new HttpHeaders({
        'Content-Type':'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  //private apiUrl="https://my-json-server.typicode.com/jgrodzki/projekt/events";
  private apiUrl="http://localhost:3000/events";
  private events=new BehaviorSubject<GameEvent[]>([]);
  readonly eventsObservable:Observable<GameEvent[]>=this.events.asObservable();
  constructor(private http:HttpClient) { }
  getEvents():Observable<GameEvent[]>
  {
    this.http.get<GameEvent[]>(this.apiUrl).subscribe(
        (events)=>{this.events.next(events)}
    );
    return this.eventsObservable;
  }
  addPlayer(newPlayer:Player,eventId:number)
  {
    const url=`${this.apiUrl}/${eventId}`;
    this.http.get<GameEvent>(url).subscribe(event=>
    {
        event.players.push(newPlayer);
        this.http.put<GameEvent>(url,event,httpOptions).subscribe(
           ()=>this.getEvents()
        );
    })
  }
}
