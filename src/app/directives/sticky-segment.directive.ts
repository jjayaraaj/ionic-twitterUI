import { isPlatform, DomController } from '@ionic/angular';
import {
  Directive,
  Input,
  AfterViewInit,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appStickySegment]',
})
export class StickySegmentDirective implements AfterViewInit {
  @Input('appStickySegment') segment: any;
  private headerHeight = isPlatform('ios') ? 44 : 56;

  constructor(private renderer: Renderer2, private domCtrl: DomController) {}

  ngAfterViewInit(): void {
    this.segment = this.segment.el;
    console.log(this.segment);
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    console.log($event);
    const scrollTop: number = $event.detail.scrollTop;
    let newPosition = -scrollTop;

    if (newPosition < -this.headerHeight) {
      newPosition = -this.headerHeight;
    }

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.segment, 'top', newPosition + 'px');
    });
  }
}
