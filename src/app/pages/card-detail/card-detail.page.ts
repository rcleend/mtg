import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { ActivatedRoute } from '@angular/router';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage implements OnInit {
  card: any;

  constructor(private cardService: CardService, private route: ActivatedRoute, private socialSharing: SocialSharing, private navController: NavController) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.card = this.cardService.loadCard(id, this.setCard.bind(this));
  }

  setCard(card: object) {
    this.card = card;
  }

  shareCard() {
    this.socialSharing.share(`Look at this MTG card! ${this.card.name}: \n${this.card.imageUrl}`, null, null);
  }

  addCardToDeck(cardId: string) {
    this.navController.navigateForward(`/deck/add/${cardId}`);
  }

}
