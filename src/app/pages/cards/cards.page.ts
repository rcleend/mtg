import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CardService } from '../../services/card.service';
import { CameraService } from '../../services/camera.service';
import { ClassifierService } from '../../services/classifier.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  cards: Array<object>;
  page: number;
  searchQuery: any;
  searchImage: string;

  constructor(private cardService: CardService, private cameraService: CameraService, private classifierService: ClassifierService, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.cards = [];
    this.page = 1;
    this.searchQuery = "";
    this.cardService.loadCards(this.cards, this.page, this.searchQuery);
  }

  addCards(event) {
    this.page++;
    this.cardService.loadCards(this.cards, this.page, this.searchQuery).then(event.target.complete);
  }

  onChangeSearchQuery(searchQuery) {
    this.searchQuery = searchQuery;
    this.cards = [];
    this.page = 1;
    this.cardService.loadCards(this.cards, this.page, this.searchQuery);
  }

  async takePhoto() {
    let image = document.createElement('img');
    // this.searchImage = await this.cameraService.getPicture();
    image.src = await this.cameraService.getPicture();
    // let image = document.getElementById("search--image") as HTMLImageElement;
    image.crossOrigin = "anonymous";
    let classifierService = this.classifierService;
    let cardService = this.cardService;
    console.log(image);
    image.onload = async () => {
      console.log('image loaded');
      let searchQuery = await classifierService.classifyImage(image);
      cardService.loadCards(this.cards, this.page, searchQuery);
    }
    // image.src = normalizeURL imageURI)

    // let image = document.getElementById("search--image") as HTMLImageElement;

    // console.log(image);
    // this.searchQuery = await this.classifierService.classifyImage(image);

    // this.cards = [];
    // this.page = 1;


    // this.cardService.loadCards(this.cards, this.page, this.searchQuery);
  }


  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    })
  }
}
