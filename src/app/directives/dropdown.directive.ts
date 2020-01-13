import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  private isOpened = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event']) onClickEvent(event: Event) {
    if (this.isOpened === false) {
      this.renderer.addClass(this.elementRef.nativeElement.nextElementSibling, 'show');
      this.isOpened = true;
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.nextElementSibling, 'show');
      this.isOpened = false;
    }
  }
}
