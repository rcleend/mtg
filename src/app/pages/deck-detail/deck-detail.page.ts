import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DecksService } from '../../services/decks.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.page.html',
  styleUrls: ['./deck-detail.page.scss'],
})
export class DeckDetailPage implements OnInit {
  cards: Array<object>;
  deck: object;

  constructor(private route: ActivatedRoute, private navController: NavController, private deckService: DecksService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cards = [];
    this.deck = this.deckService.loadDeck(id, this.setDeck.bind(this));
  }

  setDeck(deck: object) {
    this.deck = deck;
    if (deck[0] === undefined)
      return;
    this.loadCards(deck[0].mainboard);
  }

  loadCards(cards) {
    console.log(cards);
    for (const card of cards) {
      this.cards.push(card);
    }
  }

  deleteDeck() {
    this.deckService.deleteDeck(this.route.snapshot.paramMap.get('id'), this.backAfterDelete);
  }

  showDetailPage(cardId) {
    this.navController.navigateForward(`/deck/${this.deck[0]._id}/${cardId}`);
  }

  back() {
    this.navController.navigateBack('/tabs/decks');
  }

  backAfterDelete() {
    window.location.href = '/tabs/decks'
  }
}

