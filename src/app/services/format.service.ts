import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  constructor(private apiService: ApiService) { }

  async loadFormats(formats) {
    this.apiService.getData(`formats`).subscribe((data: Array<object>) => {
      for (const format of data) {
        formats.push(format);
      }
    });
  }
}
