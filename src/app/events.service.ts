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
  private eventsCache!:GameEvent[];
  private events=new BehaviorSubject<GameEvent[]>([]);
  readonly eventsObservable:Observable<GameEvent[]>=this.events.asObservable();
  constructor(private http:HttpClient){this.syncEvents()}
  getEvents():Observable<GameEvent[]>
  {
    return this.eventsObservable;
  }
  syncEvents():void
  {
    this.http.get<GameEvent[]>(this.apiUrl).subscribe(
        (events)=>{this.eventsCache=events;this.events.next(this.eventsCache);}
    );
  }
  addPlayer(newPlayer:Player,eventId:number):void
  {
    const url=`${this.apiUrl}/${eventId}`;
    this.http.get<GameEvent>(url).subscribe((event)=>
    {
        event.players.push(newPlayer);
        this.http.put<GameEvent>(url,event,httpOptions).subscribe();
        this.eventsCache[eventId]=event;
        this.events.next(this.eventsCache);
    })
  }
}
