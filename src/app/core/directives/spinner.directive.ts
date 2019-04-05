import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import {MatSpinner} from '@angular/material';

@Directive({
  selector: '[mvSpinner]'
})
export class SpinnerDirective implements OnInit, OnChanges {

  @Input('mvSpinner') show: boolean;
  spinner: MatSpinner;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
    console.log('spinner on init', this.show);
    // this.renderer.addClass()
    // Record the button's original text
    // this.originalInnerText = this.el.nativeElement.innerText;

    // Set the button to maintain the same dimensions, even once we put the spinner inside.
    // this.el.nativeElement.style.width = `${(this.el.nativeElement as HTMLElement).offsetWidth}px`;
    // this.el.nativeElement.style.height = `${(this.el.nativeElement as HTMLElement).offsetHeight}px`;

    // Create the spinner
    const factory = this.componentFactoryResolver.resolveComponentFactory(MatSpinner);
    const componentRef = this.viewContainerRef.createComponent(factory);
    // this.spinner = componentRef.instance;

    // this.renderer.appendChild(this.el.nativeElement.firstChild, this.spinner._elementRef.nativeElement);

    //
    // // Configure the spinner
    // this.spinner.strokeWidth = 3;
    // this.spinner.diameter = 24;
    //
    // // Hide the spinner
    // this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'display', 'none');
    //
    // // Apply new styles to the button content's container
    // const span = this.el.nativeElement.querySelector('.mat-button-wrapper') as HTMLSpanElement;
    // this.renderer.setStyle(span, 'display', 'flex');
    // this.renderer.setStyle(span, 'align-items', 'center');
    // this.renderer.setStyle(span, 'justify-content', 'center');
  }

  ngOnChanges({show}: SimpleChanges) {
    console.log('dpinner on change', this.show);
    if (show) {
      this.renderer.addClass(this.el.nativeElement, 'in');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'in');
    }
    // if (typeof(changes.showSpinner) === 'object' && !changes.showSpinner.isFirstChange()) {
    //   if (changes.showSpinner.currentValue === true) {
    //     // Clear the button's text
    //     const span = this.el.nativeElement.querySelector('.mat-button-wrapper') as HTMLSpanElement;
    //     span.innerText = '';
    //
    //     // Append the spinner
    //     this.renderer.appendChild(this.el.nativeElement.firstChild, this.spinner._elementRef.nativeElement);
    //
    //     // Show the spinner
    //     this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'display', 'inherit');
    //   }
    //
    //   if (changes.showSpinner.currentValue === false) {
    //     // Hide the spinner
    //     this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'display', 'none');
    //
    //     // Remove the spinner
    //     this.renderer.removeChild(this.el.nativeElement.firstChild, this.spinner._elementRef.nativeElement);
    //
    //     const span = this.el.nativeElement.querySelector('.mat-button-wrapper') as HTMLSpanElement;
    //     // span.innerText = this.originalInnerText;
    //   }
    //
    //   this.el.nativeElement.disabled = changes.showSpinner.currentValue;
    // }
  }

}
