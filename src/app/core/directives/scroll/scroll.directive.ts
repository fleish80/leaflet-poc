import {ChangeDetectorRef, Directive, ElementRef, Inject, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[mvScroll]'
})
export class ScrollDirective implements OnChanges {

  @Input('mvScroll') scroll: boolean;

  constructor(private elementRef: ElementRef, @Inject('window') private window: Window, private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnChanges({scroll}: SimpleChanges): void {
    if (scroll.previousValue !== scroll.currentValue && this.scroll) {
      this.changeDetectorRef.detectChanges();
      console.log(this.elementRef.nativeElement.getAttribute('id'));
      console.log(this.elementRef.nativeElement);
      console.log(this.elementRef);
      this.elementRef.nativeElement.scrollIntoView();
    }
  }

}
