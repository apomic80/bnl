import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EventsService } from './events.service';
import { Event } from './events.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventsResolver implements Resolve<Event[]> {

  constructor(private service: EventsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<Event[]>  {
    return this.service.getEvents();
  }
}
