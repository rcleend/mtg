import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormatService } from '../../services/format.service'
import { DecksService } from '../../services/decks.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.page.html',
  styleUrls: ['./create-deck.page.scss'],
})
export class CreateDeckPage implements OnInit {
  formats: Array<string>;
  name: string;
  format: string;

  constructor(private decksService: DecksService, private formatService: FormatService, private alertController: AlertController, private navController: NavController, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.formats = [];
    this.formatService.loadFormats(this.formats);
    this.name = '';
    this.format = '';
  }

  setFormat(option) {
    console.log('option: ' + option);
    this.format = option;
  }

  cancel() {
    this.navController.pop();
  }

  createDeck() {
    return {
      name: this.name,
      userUid: this.afAuth.auth.currentUser.uid,
      format: this.format,
      mainboard: []
    }
  }

  save() {
    if (this.checkInput()) {
      console.log('saving');
      this.decksService.createDeck(this.createDeck());
      this.navController.pop();
    }
  }

  checkInput() {
    const regexCheck = /[a-z]/i;
    if (!this.name.match(regexCheck)) {
      this.presentAlert('Please enter a valid name for your deck.');
      return false;
    }

    if (!this.format.match(regexCheck)) {
      this.presentAlert('Please select the game format of your deck');
      return false;
    }

    return true;
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


}
