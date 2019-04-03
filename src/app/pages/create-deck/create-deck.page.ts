import { Component, OnInit } from '@angular/core';
import { FormatService } from '../../services/format.service'
import { DecksService } from '../../services/decks.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.page.html',
  styleUrls: ['./create-deck.page.scss'],
})
export class CreateDeckPage implements OnInit {
  formats: Array<string>;
  name: string;
  format: string;

  constructor(private decksService: DecksService, private formatService: FormatService, private alertController: AlertController) { }

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

  save() {
    const regexCheck = /[a-z]/i;
    if (!this.name.match(regexCheck)) {
      this.presentAlert('Please enter the name of your deck.');
    }
    else if (!this.format.match(regexCheck)) {
      this.presentAlert('Please select the game format of your deck');
    } else {

    }
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


}
