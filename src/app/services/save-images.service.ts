import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaveImagesService {

  readonly URI = `http://localhost:8080/images/upload`;

  constructor(private http: HttpClient) { }

  loadImage(image: { image }) {
    return this.http.post(this.URI, image);
  }

}
