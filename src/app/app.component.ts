import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cat-app';
  cats = [];
  URL = "https://api.thecatapi.com/v1/images/search";
  constructor(private http: HttpClient) {  }

  addCat() {
    return this.http.get(this.URL, {
      headers: {["x-api-key"]:"206f0a0f-d8cb-43d0-bc39-159b5f5b2e5a"}
      // params: {["mime_type"]:"gif", ["limit"]:"1"}
    })
      .subscribe(result => {
        result[0].url;
        this.cats.push(result[0].url);
      });
  }
}
