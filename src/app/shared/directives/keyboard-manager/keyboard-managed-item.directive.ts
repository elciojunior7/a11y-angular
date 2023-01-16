import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appKeyboardManagedItem]',
})
export class KeyboardManagedItemDirective {
  @Output() focusedChange = new EventEmitter<void>();

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  focus(): void {
    this.elementRef.nativeElement.focus();
    this.focusedChange.emit();
  }

  isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
