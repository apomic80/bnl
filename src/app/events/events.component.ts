import { Component } from '@angular/core';
import { Event } from "./events.model";

@Component({
  selector: 'app-events',
  templateUrl: 'events.component.html'
})
export class EventsComponent {

  public eventList: Event[];
  public formVisible: boolean;

  constructor() {
    this.formVisible = false;
    this.loadEvents();
  }

  public showForm() {
    this.formVisible = true;
  }

  public hideForm() {
    this.formVisible = false;
  }

  create() {
    this.showForm();
  }

  edit(event: Event) {
    this.showForm();
  }

  delete(event: Event) {
    alert('delete ' + JSON.stringify(event));
  }

  public loadEvents() {
    this.eventList = [
      {
        id: 1,
        name: 'Angular 2 Lab',
        startDate: '23-09-2016',
        endDate: '23-09-2016',
        description: 'Laboratorio su Angular 2',
        visible: true,
        location: 'casoria' },
      {
        id: 2,
        name: 'Meetup salerno',
        startDate: '24-09-2016',
        endDate: '24-09-2016',
        description: 'Typescript e Angular 2',
        visible: true,
        location: 'salerno'
      }
    ];
  }

}
