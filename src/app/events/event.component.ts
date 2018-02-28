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

  @Output()
  public saved: EventEmitter<any>;

  constructor() {
    this.cancelled = new EventEmitter();
    this.saved = new EventEmitter();
  }

  save() {
    this.saved.emit();
  }

  cancel() {
    this.cancelled.emit();
  }

}
