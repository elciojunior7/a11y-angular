import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ModalModule } from './shared/components/modal/modal.module';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { YesNoRadioGroupModule } from './shared/components/yes-no-radio-group/yes-no-radio-group.module';
import { DisableControlModule } from './shared/directives/disable-control/disable-control.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ModalModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DisableControlModule,
    YesNoButtonGroupModule,
    YesNoRadioGroupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
