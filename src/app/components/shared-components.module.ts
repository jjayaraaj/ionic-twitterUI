import { TweetComponent } from './tweet/tweet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TweetComponent],
  imports: [CommonModule],
  exports: [TweetComponent],
})
export class SharedComponentsModule {}
