import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {
  id: 0;
  title = 'Hello there :)';

  constructor(private localNotifications: LocalNotifications) {
    document.addEventListener("pause", this.setBackgroundText.bind(this));
    document.addEventListener("resume", this.setForegroundText.bind(this));
  }

  setBackgroundText() {
    this.title = "Come back please. We miss you :(";
  }

  setForegroundText() {
    this.title = "Hello there :)";
  }

  sendNotification(msg: string) {
    this.localNotifications.schedule({
      id: this.id++,
      title: this.title,
      text: msg,
      foreground: true,
      vibrate: true,
      led: { color: '#F700FF', on: 500, off: 500 }
    });
  }
}
