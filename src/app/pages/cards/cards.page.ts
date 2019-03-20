import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {CardService} from '../../services/card.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  cards : Array<object>;
  page: number;
  searchQuery: string;
  myPhoto: any;

  constructor(private cardService: CardService, public afAuth: AngularFireAuth, private camera: Camera) { }

  ngOnInit() {
    this.cards = [];
    this.page = 1;
    this.searchQuery = "";
    this.cardService.loadCards(this.cards, this.page, this.searchQuery);
  }

  addCards(event){
    this.page++;
    this.cardService.loadCards(this.cards, this.page, this.searchQuery).then(event.target.complete);
  }

  onChangeSearchQuery(searchQuery){
    this.searchQuery = searchQuery;
    this.cards= [];
    this.page= 1;
    this.cardService.loadCards(this.cards, this.page, this.searchQuery);
  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    // Handle error
    });
  }

  signOut(){
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    })
  }
}
