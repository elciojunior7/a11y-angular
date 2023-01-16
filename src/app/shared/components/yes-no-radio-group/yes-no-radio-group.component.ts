import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-yes-no-radio-group',
  templateUrl: './yes-no-radio-group.component.html',
  styleUrls: ['./yes-no-radio-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoRadioGroupComponent),
    },
  ],
})
export class YesNoRadioGroupComponent implements ControlValueAccessor {
  @Input() label!: string;
  onChange = (value: boolean) => {};
  onTouched = () => {};

  constructor() {}

  writeValue(value: boolean): void {
    this.onChange(value);
  }
  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  activate(option: boolean) {
    this.writeValue(option);
  }
}
