import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event  } from './events.model';
import { EventsService } from './events.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: 'event.component.html'
})
export class EventComponent {

  @Input()
  public currentEvent: Event;

  @Output()
  public cancelled: EventEmitter<any>;

  @Output()
  public saved: EventEmitter<any>;

  public errorMessage: string;

  constructor(
    private service: EventsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.cancelled = new EventEmitter();
    this.saved = new EventEmitter();
    this.currentEvent = new Event();
    const eventId = this.activatedRoute.snapshot.params['id'];
    if (eventId) {
      this.loadEvent(eventId);
    }
  }

  private loadEvent(id: number) {
    this.service.getEvent(id)
      .subscribe(arg => this.currentEvent = arg);
  }

  save() {
    if (!this.currentEvent.id) {
      this.service.createEvent(this.currentEvent)
        .subscribe(
          arg => { this.saved.emit(); this.router.navigateByUrl('events'); },
          err => this.errorMessage = err);
    } else {
      this.service.updateEvent(this.currentEvent)
        .subscribe(
          arg => { this.saved.emit(); this.router.navigateByUrl('events'); },
          err => this.errorMessage = err);
    }
  }

  cancel() {
    this.cancelled.emit();
    this.router.navigateByUrl('events');
  }

}
