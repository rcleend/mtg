import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  limit = 12;

  constructor(private apiService: ApiService) { }

  async loadCards(cards, page: number, searchQuery: string) {
    this.apiService.getData(`cards?page=${page}&limit=${this.limit}&search=${searchQuery}`).subscribe((data: Array<object>) => {
      for (const card of data) {
        console.log(card);
        cards.push(card);
      }
    });
  }

  async loadCard(cards, searchQuery: string) {
    this.apiService.getData(`cards/${searchQuery}`).subscribe((card: object) => {
      console.log(card);
      cards.push(card);
    });
  }

}
