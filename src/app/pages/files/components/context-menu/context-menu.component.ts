import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPopover,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { printOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-context-menu',
  standalone: true,
  imports: [
    CommonModule,
    IonButton,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonPopover,
  ],
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.scss',
})
export class ContextMenuComponent {
  @Input() fileId: number = 0;

  constructor() {
    addIcons({
      trashOutline,
      printOutline,
    });
  }

  printFile() {
    console.log(`Printing file ${this.fileId}`);
  }

  deleteFile() {
    console.log(`Deleting file ${this.fileId}`);
  }
}
