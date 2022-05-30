import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of} from 'rxjs';
import { GameEvent } from './GameEvent';
import { Player } from "./Player";

const httpOptions=
{
    headers:new HttpHeaders({
        'Content-Type':'application/json'
    })
}
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl="http://localhost:3000/events";
  //private apiUrl="https://my-json-server.typicode.com/jgrodzki/projekt/events";
  constructor(private http:HttpClient) { }
  getEvents():Observable<GameEvent[]>
  {
    return this.http.get<GameEvent[]>(this.apiUrl);
  }
  addPlayer(newPlayer:Player,eventId:number)
  {
    const url=`${this.apiUrl}/${eventId}`;
    this.http.get<GameEvent>(url).subscribe(event=>
    {
        event.players.push(newPlayer);
        this.http.put<GameEvent>(url,event,httpOptions).subscribe();
    })
  }
}
