import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event.component';
import { BooleanPipe } from './shared/boolean.pipe';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, EventsComponent, EventComponent,
    BooleanPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
