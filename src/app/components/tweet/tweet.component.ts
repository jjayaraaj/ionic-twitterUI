import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
})
export class TweetComponent implements OnInit {
  @Input('receivedTeet') tweet: any;

  constructor() {}

  ngOnInit() {
    console.log(this.tweet);
    this.parseTweet();
  }

  parseTweet() {
    this.tweet.text = this.tweet.text.replace(
      /\#[a-zA-Z]+/g,
      '<span class="highlight">$&</span>'
    );
    this.tweet.text = this.tweet.text.replace(
      /\@[a-zA-Z]+/g,
      '<span class="highlight">$&</span>'
    );
  }
}
