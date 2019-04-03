import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DecksService } from '../../services/decks.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.page.html',
  styleUrls: ['./decks.page.scss'],
})
export class DecksPage implements OnInit {
  decks: Array<object>
  page: number;
  searchQuery: any;

  constructor(private decksService: DecksService, private navController: NavController, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.resetDecks();
    this.decksService.loadDecks(this.decks, this.afAuth.auth.currentUser.uid, this.page, this.searchQuery);
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

  createNewDeck() {
    this.navController.navigateForward(`/create-deck`);
  }

  showDeckDetailPage(deckId: string) {
    this.navController.navigateForward(`/deck/${deckId}`);
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    })
  }

}
