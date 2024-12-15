import { Injectable } from '@angular/core';

import { CONFIG } from '../../environments/constants';

@Injectable({
  providedIn: 'root',
})
export class PrinterService {
  private printerURL: string = CONFIG.printerURL;

  constructor() {}
}
