import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

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

  createDeck(deck) {
    this.apiService.postData(`decks`, deck).subscribe((data: Array<object>) => {
      console.log(data);
    });
  }

}
