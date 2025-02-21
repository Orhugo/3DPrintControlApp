import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CONFIG } from '../../environments/constants';

@Injectable({
  providedIn: 'root',
})
export class PrinterService {
  private printerURL: string = CONFIG.printerURL;

  constructor(private http: HttpClient) {}

  sendGcodeMovementCommand(axis: string, space: number) {
    const body = { commands: ['G91', `G1 ${axis}${space} F7800`, 'G90'] };

    return this.http.post(`${this.printerURL}/api/printer/command`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getAllFiles() {
    return this.http.get(`${this.printerURL}/server/files/list`);
  }
}
