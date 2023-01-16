import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFocusBack]',
})
export class FocusBackDirective implements OnInit, OnDestroy {
  private lastFocusedElement!: Element | null;

  ngOnInit(): void {
    this.lastFocusedElement = document.activeElement;
  }

  ngOnDestroy(): void {
    if (this.lastFocusedElement)
      (this.lastFocusedElement as HTMLElement).focus();
  }
}
