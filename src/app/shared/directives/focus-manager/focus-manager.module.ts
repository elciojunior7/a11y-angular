import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusTrapDirective } from './focus-trap.directive';
import { FocusBackDirective } from './focus-back.directive';

@NgModule({
  declarations: [FocusTrapDirective, FocusBackDirective],
  imports: [CommonModule],
  exports: [FocusTrapDirective, FocusBackDirective],
})
export class FocusManagerModule {}
