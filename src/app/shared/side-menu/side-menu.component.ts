import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonNavLink,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { FilesListComponent } from '../../pages/files-list/files-list.component';

@Component({
  standalone: true,
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [
    IonMenu,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonNavLink,
    IonHeader,
    IonButton,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
  ],
})
export class SideMenuComponent {
  constructor() {}

  protected readonly FilesListComponent = FilesListComponent;
}
