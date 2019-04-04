import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecksService {
  limit = 12;

  constructor(private apiService: ApiService) { }

  async loadDecks(decks, uid: string, page: number, searchQuery: string) {
    this.apiService.getData(`decks?uid=${uid}&page=${page}&limit=${this.limit}&search=${searchQuery}`).subscribe((data: Array<object>) => {
      console.log(data);
      for (const deck of data) {
        decks.push(deck);
      }
    });
  }

  async loadDeck(id: string, callBack: Function) {
    this.apiService.getData(`deck/${id}`).subscribe((deck: object) => {
      console.log(deck);
      callBack(deck);
    });
  }

  createDeck(name: string, userUid: string, format: string, callBack: Function) {
    const deck = {
      name: name,
      userUid: userUid,
      format: format
    }
    this.apiService.postData('decks', deck).subscribe((data: Array<object>) => {
      console.log(data);
      callBack();
    });
  }

  addToDeck(deckId: string, cardId: string) {
    const data = {
      deckId: deckId,
      cardId: cardId
    }

    this.apiService.putData('decks', data).subscribe((data: Array<object>) => {
      console.log(data);
    });
  }

  removeFromDeck(deckId: string, cardId: string, callBack: Function) {
    this.apiService.deleteData(`decks/${deckId}/${cardId}`).subscribe((data: Array<object>) => {
      console.log(data);
      callBack();
    });
  }

  deleteDeck(deckId: string, callBack: Function) {
    this.apiService.deleteData(`decks/${deckId}`).subscribe((data: Array<object>) => {
      console.log(data);
      callBack();
    });
  }

}
