import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpecial]',
  standalone: true
})
export class SpecialDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'deeppink';
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.applySpecialColor('blue');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.applySpecialColor('');
  }

  private applySpecialColor(color: string): void {
    this.el.nativeElement.style.color = color;
  }

}
