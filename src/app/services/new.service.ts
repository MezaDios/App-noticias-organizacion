import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { New } from '../models/new.model';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  selectedNew: New;
  News: New[];
  readonly URL_API = 'https://rest-api-noticias-organizacion.herokuapp.com/api/news';

  constructor(private http: HttpClient) {
    this.selectedNew = new New();
  }

  getNew(paramNew: any) {
    return this.http.get(this.URL_API, paramNew);
  }

  getNews() {
    return this.http.get(this.URL_API);
  }

  postNew(paramNew: New) {
    return this.http.post(this.URL_API, paramNew);
  }

  putNew(id: string, paramNew: New) {
    return this.http.put(`${this.URL_API}/${id}`, paramNew);
  }

  deleteNew(id: string) {
    return this.http.delete(`${this.URL_API}/${id}`);
  }

}
