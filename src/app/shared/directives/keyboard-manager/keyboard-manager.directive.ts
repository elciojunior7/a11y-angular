import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';
import { ArrowDirection } from './arrow-direction.enum';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

@Directive({
  selector: '[appKeyboardManager]',
})
export class KeyboardManagerDirective {
  constructor() {}

  @ContentChildren(KeyboardManagedItemDirective)
  items!: QueryList<KeyboardManagedItemDirective>;

  @HostListener('keyup', ['$event'])
  manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.moveItemSelected(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowDown':
        this.moveItemSelected(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowLeft':
        this.moveItemSelected(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowRight':
        this.moveItemSelected(ArrowDirection.RIGHT).focus();
        break;
    }
  }

  moveItemSelected(direction: ArrowDirection): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex((item) => item.isFocused());
    let targetElemToFocus = items[currentSelectedIndex + direction];
    if (!targetElemToFocus && direction === ArrowDirection.LEFT)
      targetElemToFocus = items[items.length - 1];
    else if (!targetElemToFocus && direction === ArrowDirection.RIGHT)
      targetElemToFocus = items[0];

    return targetElemToFocus;
  }
}
