import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { FocusManagerModule } from '../../directives/focus-manager/focus-manager.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, FocusManagerModule],
  exports: [ModalComponent],
})
export class ModalModule {}
