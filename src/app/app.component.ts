import { Component } from '@angular/core';
import {
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline } from 'ionicons/icons';

import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonContent,
    IonButtons,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonMenuButton,
    NavMenuComponent,
  ],
})
export class AppComponent {
  constructor() {
    addIcons({
      menuOutline,
    });
  }
}
