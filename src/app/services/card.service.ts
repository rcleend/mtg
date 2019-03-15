import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  limit = 12;

  constructor(private apiService: ApiService) { }

  public async loadCards(cards, page: number, searchQuery: string){
    console.log(`page: ${page}, searchQuery: ${searchQuery}`)
    this.apiService.getData(`cards?page=${page}&limit=${this.limit}&search=${searchQuery}`).subscribe((data: Array<object>) => {
      console.log(data);
      for(const card of data){
        cards.push(card);
      }
    });
  }




}
