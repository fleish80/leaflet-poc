import {ChangeDetectorRef, Directive, ElementRef, Inject, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[mvScrollToElement]'
})
export class ScrollToElementDirective implements OnChanges {

  @Input('mvScrollToElement') scroll: boolean;

  constructor(private elementRef: ElementRef, @Inject('window') private window: Window, private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnChanges({scroll}: SimpleChanges): void {
    if (scroll.previousValue !== scroll.currentValue && this.scroll) {
      this.changeDetectorRef.detectChanges();
      this.elementRef.nativeElement.scrollIntoView();
    }
  }

}
