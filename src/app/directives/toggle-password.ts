import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTogglePassword]',
  standalone:true 
})
export class TogglePasswordDirective {
  private isVisible=false;
  constructor(private el: ElementRef) {}
@HostListener('click')
toggle() {
      const input = this.el.nativeElement.previousElementSibling;
      if (input) {
      this.isVisible = !this.isVisible;
      input.type = this.isVisible ? 'text' : 'password';
    }
  }
}
