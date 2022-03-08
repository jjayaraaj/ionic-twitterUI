import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  tweets = [];
  segment = 'home';
  opts = {
    slidesPerView: 4.5,
    spaceBetween: 10,
    slidesOffsetBefore: 0,
  };

  constructor(private http: HttpClient) {
    this.http
      .get(
        'https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/tweets.json'
      )
      .subscribe((data: any) => {
        this.tweets = data.tweets;
      });
  }
}
