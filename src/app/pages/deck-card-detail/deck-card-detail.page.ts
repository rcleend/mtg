import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { DecksService } from '../../services/decks.service';
import { ActivatedRoute } from '@angular/router';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-deck-card-detail',
  templateUrl: './deck-card-detail.page.html',
  styleUrls: ['./deck-card-detail.page.scss'],
})
export class DeckCardDetailPage implements OnInit {
  card: any;
  deckId: string;

  constructor(private cardService: CardService, private decksService: DecksService, private route: ActivatedRoute, private socialSharing: SocialSharing, private navController: NavController) { }

  ngOnInit() {
    this.deckId = this.route.snapshot.paramMap.get('deckId');
    const cardId = this.route.snapshot.paramMap.get('cardId');
    this.card = this.cardService.loadCard(cardId, this.setCard.bind(this));
  }

  setCard(card: object) {
    this.card = card;
  }

  shareCard() {
    this.socialSharing.share(`Look at this MTG card! ${this.card.name}: \n${this.card.imageUrl}`, null, null);
  }

  removeCardFromDeck() {
    this.decksService.removeFromDeck(this.deckId, this.card.id, this.backAfterDelete);
  }

  backAfterDelete() {
    window.location.href = `/deck/detail/${this.deckId}`;
  }
}
