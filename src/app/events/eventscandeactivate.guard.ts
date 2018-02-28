import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EventsComponent } from './events.component';

@Injectable()
export class EventsCanDeactivateGuard implements CanDeactivate<EventsComponent> {
  canDeactivate(
    component: EventsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return confirm('Are you sure?');
  }
}
