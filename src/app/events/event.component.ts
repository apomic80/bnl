import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event  } from './events.model';

@Component({
  selector: 'app-event',
  templateUrl: 'event.component.html'
})
export class EventComponent {

  @Input()
  public currentEvent: Event;

  @Output()
  public cancelled: EventEmitter<any>;

  constructor() {
    this.cancelled = new EventEmitter();
  }

  cancel() {
    this.cancelled.emit();
  }

}
