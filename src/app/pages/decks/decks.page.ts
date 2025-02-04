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
  searchQuery: string;

  constructor(private decksService: DecksService, private navController: NavController, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.resetDecks();
    this.decksService.loadDecks(this.decks, this.afAuth.auth.currentUser.uid, this.page, this.searchQuery);
  }

  ionViewDidLoad() {
    console.log("I'm alive!");
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
    this.navController.navigateForward(`/deck/create`);
  }

  showDeckDetailPage(deckId: string) {
    this.navController.navigateForward(`/deck/detail/${deckId}`);
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    })
  }

}
