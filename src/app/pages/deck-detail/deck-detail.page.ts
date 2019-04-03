import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DecksService } from '../../services/decks.service';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.page.html',
  styleUrls: ['./deck-detail.page.scss'],
})
export class DeckDetailPage implements OnInit {
  cards: Array<object>;
  deck: object;

  constructor(private route: ActivatedRoute, private deckService: DecksService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cards = [];
    this.deck = this.deckService.loadDeckCards();
  }

  setDeck(deck: object) {
    this.deck = deck;
  }

  loadCards(cards) {
    console.log(cards);
    for (const card of cards) {
      this.cards.push(card);
    }
  }

  addCard() {

  }


}
