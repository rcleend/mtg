import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.hostUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(`${API_URL}/api/${url}`);
  }

  postData(url, body) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.post(`${API_URL}/api/${url}`, body, httpOptions);
  }

  putData(url, body) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.put(`${API_URL}/api/${url}`, body, httpOptions);
  }

  deleteData(url) {
    return this.http.delete(`${API_URL}/api/${url}`);
  }
}
