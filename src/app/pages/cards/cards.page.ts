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
    this.resetCards();
    this.cardService.loadCards(this.cards, this.page, this.searchQuery);
  }

  addCards(event) {
    this.page++;
    this.cardService.loadCards(this.cards, this.page, this.searchQuery).then(event.target.complete);
  }

  onChangeSearchQuery(searchQuery) {
    this.resetCards();
    this.searchQuery = searchQuery;
    this.cardService.loadCards(this.cards, this.page, this.searchQuery);
  }

  async takePhoto() {
    let image = document.createElement('img');
    image.src = await this.cameraService.getPicture();
    image.onload = () => {
      this.classifierService.classifyImage(image, this.showDetailPage.bind(this));
    }
  }

  showDetailPage(cardId: string) {
    console.log('showing detail page');
    console.log(cardId);
    this.resetCards();
    this.cardService.loadCard(this.cards, cardId);
  }

  resetCards() {
    this.cards = [];
    this.page = 1;
    this.searchQuery = "";
  }


  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    })
  }
}
