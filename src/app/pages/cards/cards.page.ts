import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { CameraService } from '../../services/camera.service';
import { ClassifierService } from '../../services/classifier.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  cards: Array<object>;
  page: number;
  searchQuery: any;

  constructor(private cardService: CardService, private cameraService: CameraService, private classifierService: ClassifierService, private navController: NavController) { }

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
    this.navController.navigateForward(`/card/${cardId}`);
  }

  resetCards() {
    this.cards = [];
    this.page = 1;
    this.searchQuery = "";
  }
}
