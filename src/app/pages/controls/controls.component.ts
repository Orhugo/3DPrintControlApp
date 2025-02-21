import { Component } from '@angular/core';
import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  arrowDownOutline,
  arrowForwardOutline,
  arrowUpOutline,
} from 'ionicons/icons';

import { PrinterService } from '../../services/printer.service';

@Component({
  selector: 'app-controls',
  templateUrl: 'controls.component.html',
  styleUrls: ['controls.component.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonButton, IonIcon],
})
export class ControlsComponent {
  constructor(private printerService: PrinterService) {
    addIcons({
      arrowUpOutline,
      arrowDownOutline,
      arrowForwardOutline,
      arrowBackOutline,
    });
  }

  moveY(space: number) {
    this.printerService.sendGcodeMovementCommand('y', space).subscribe();
  }

  moveX(space: number) {
    this.printerService.sendGcodeMovementCommand('x', space).subscribe();
  }

  moveZ(space: number) {
    this.printerService.sendGcodeMovementCommand('z', space).subscribe();
  }

  getFiles() {
    this.printerService.getAllFiles().subscribe(data => {
      console.log(data);
    });
  }
}
