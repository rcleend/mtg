import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public socket;

  constructor() {
    this.socket = io(`http://${environment.hostUrl}`);
  }

  checkForClassifierUpdate(currentVersionNr) {
    this.socket.emit('checkClassifierVersion', currentVersionNr);
  }
}
