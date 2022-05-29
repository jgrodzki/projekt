import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of} from 'rxjs';
import { GameEvent } from './GameEvent';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl="http://localhost:3000/events";
  constructor(private http:HttpClient) { }
  getEvents():Observable<GameEvent[]>
  {
    return this.http.get<GameEvent[]>(this.apiUrl);
  }
}
