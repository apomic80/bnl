import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event  } from './events.model';
import { EventsService } from './events.service';

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

  constructor(private service: EventsService) {
    this.cancelled = new EventEmitter();
    this.saved = new EventEmitter();
  }

  save() {
    if (!this.currentEvent.id) {
      this.service.createEvent(this.currentEvent)
        .subscribe(
          arg => this.saved.emit(),
          err => this.errorMessage = err);
    } else {
      this.service.updateEvent(this.currentEvent)
        .subscribe(
          arg => this.saved.emit(),
          err => this.errorMessage = err);
    }
  }

  cancel() {
    this.cancelled.emit();
  }

}
