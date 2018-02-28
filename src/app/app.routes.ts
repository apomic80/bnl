import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event.component';
import { SpeakersComponent } from './speakers/speakers.component';

const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'event/:id',
    component: EventComponent
  },
  {
    path: 'speakers',
    component: SpeakersComponent
  },
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders
  = RouterModule.forRoot(appRoutes);
