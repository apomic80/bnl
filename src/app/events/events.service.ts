import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Event } from './events.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {

  private apiUrl: string;

  constructor(private http: Http) {
    this.apiUrl = 'http://eventmanagerapiaspnetcore.azurewebsites.net/api/events';
  }

  public getEvents(): Observable<Event[]> {
    return this.http.get(this.apiUrl)
      .map((response: Response) => response.json() as Event[]);
  }
}
