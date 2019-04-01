import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;

  constructor() {
    this.socket = io(`http://${environment.hostUrl}`, { transports: ['websocket'] });
  }
}
