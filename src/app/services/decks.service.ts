import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DecksService {
  limit = 12;

  constructor(private apiService: ApiService) { }

  async loadDecks(decks, page: number, searchQuery: string) {
    this.apiService.getData(`decks?page=${page}&limit=${this.limit}&search=${searchQuery}`).subscribe((data: Array<object>) => {
      console.log(data);
      for (const deck of data) {
        decks.push(deck);
      }
    });
  }

  async loadDeck(id: string, callBack: Function) {
    this.apiService.getData(`deck/${id}`).subscribe((deck: object) => {
      callBack(deck);
    });
  }
  async loadDeckCards() {
    this.apiService.getData(`deck/hoi/mainboard`).subscribe((deck: object) => {
      console.log(deck);
    });
  }

}
