import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public navigating: boolean;

  constructor(private router: Router) {
    this.navigating = false;
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.navigating = true;
        }
        if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
          this.navigating = false;
        }
      }
    );
  }
}
