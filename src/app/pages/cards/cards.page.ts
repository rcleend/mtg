import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  cards : any;
  page: number;
  searchQuery: string;

  constructor(private cardService: CardService, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.cards = [];
    this.page = 1;
    this.searchQuery = "";
    this.cardService.loadCards(this.cards, this.page, this.searchQuery);
  }

  addCards(event){
    this.page++;
    this.cardService.loadCards(this.cards, this.page, this.searchQuery).then(event.target.complete);
  }

  onChangeSearchQuery(event){
    this.searchQuery = event;
    this.cards= [];
    this.page= 1;
    this.cardService.loadCards(this.cards, this.page, this.searchQuery);
  }

  signOut(){
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    })
  }
}
