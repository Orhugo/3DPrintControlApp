import { Component } from '@angular/core';
import { IonApp, IonNav, IonRouterOutlet } from '@ionic/angular/standalone';

import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonNav],
})
export class AppComponent {
  component = HomeComponent;
  constructor() {}
}
