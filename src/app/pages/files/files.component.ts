import { Component } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';

import { ContextMenuComponent } from './components/context-menu/context-menu.component';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonContent, IonList, ContextMenuComponent],
})
export class FilesComponent {
  files = [
    {
      id: 1,
      name: 'file1.txt',
      size: '1.2MB',
      date: '2021-01-01',
    },
    {
      id: 2,
      name: 'file2.txt',
      size: '2.3MB',
      date: '2021-01-02',
    },
    {
      id: 3,
      name: 'file3.txt',
      size: '3.4MB',
      date: '2021-01-03',
    },
  ];

  constructor() {}
}
