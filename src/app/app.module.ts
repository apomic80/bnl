import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event.component';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, EventsComponent, EventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
