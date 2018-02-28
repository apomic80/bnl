import { Component } from '@angular/core';
import { Event } from './events.model';
import { EventsService } from './events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: 'events.component.html'
})
export class EventsComponent {

  public eventList: Event[];
  public selectedEvent: Event;
  public formVisible: boolean;

  constructor(
    private service: EventsService,
    private activatedRoute: ActivatedRoute) {
    this.formVisible = false;
    // this.loadEvents();
    this.eventList = this.activatedRoute.snapshot.data['events'];
  }

  public showForm() {
    this.formVisible = true;
  }

  public hideForm() {
    this.formVisible = false;
  }

  create() {
    this.selectedEvent = new Event();
    this.showForm();
  }

  edit(event: Event) {
    this.selectedEvent = event;
    this.showForm();
  }

  delete(event: Event) {
    this.service.deleteEvent(event.id)
      .subscribe(arg => this.loadEvents());
  }

  save() {
    this.hideForm();
    this.loadEvents();
  }

  public loadEvents() {
    this.service.getEvents()
      .subscribe(arg => this.eventList = arg);
  }

}
