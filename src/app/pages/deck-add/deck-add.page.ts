import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DecksService } from '../../services/decks.service';

import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-deck-add',
  templateUrl: './deck-add.page.html',
  styleUrls: ['./deck-add.page.scss'],
})
export class DeckAddPage implements OnInit {
  page: number;
  searchQuery: string;
  decks: Array<object>
  cardId: string;

  constructor(private decksService: DecksService, private navController: NavController, private route: ActivatedRoute, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.resetDecks();
    this.cardId = this.route.snapshot.paramMap.get('id');
    this.decksService.loadDecks(this.decks, this.afAuth.auth.currentUser.uid, this.page, this.searchQuery);
  }

  addToDeck(deckid: string) {
    this.decksService.addToDeck(deckid, this.cardId);
    this.navController.navigateBack('/tabs/cards');
  }

  addDecks(event) {
    this.page++;
    this.decksService.loadDecks(this.decks, this.afAuth.auth.currentUser.uid, this.page, this.searchQuery).then(event.target.complete);
  }

  onChangeSearchQuery(searchQuery) {
    this.resetDecks();
    this.searchQuery = searchQuery;
    this.decksService.loadDecks(this.decks, this.afAuth.auth.currentUser.uid, this.page, this.searchQuery);
  }

  resetDecks() {
    this.decks = [];
    this.page = 1;
    this.searchQuery = "";
  }
}
