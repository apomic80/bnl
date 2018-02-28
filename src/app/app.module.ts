import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event.component';
import { BooleanPipe } from './shared/boolean.pipe';
import { EventsService } from './events/events.service';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './speakers/speakers.component';
import { routing } from './app.routes';
import { EventsResolver } from './events/events.resolver';
import { EventsCanDeactivateGuard } from './events/eventscandeactivate.guard';
import { EventsCanActivateGuard } from './events/eventscanactivate.guard';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, EventsComponent,
    EventComponent, BooleanPipe, SpeakersComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    CommonModule, routing
  ],
  providers: [EventsService, EventsResolver, EventsCanDeactivateGuard, EventsCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
