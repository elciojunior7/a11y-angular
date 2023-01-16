import { TemplateRef, ComponentRef } from '@angular/core';
import { ModalComponent } from './modal.component';

export interface ModalConfig {
  templateRef: TemplateRef<any>;
  title: string;
}

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  public close(): void {
    this.componentRef.destroy();
  }
}
