import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent),
    },
  ],
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() disabled = false;
  @Input() label!: string;
  @Input() yesNoValue!: boolean;
  @Output() yesNoValueChange = new EventEmitter<boolean>();
  onChange = (value: boolean) => {};
  onTouched = () => {};

  constructor() {}

  writeValue(value: boolean): void {
    this.yesNoValue = value;
    this.onChange(value);
    this.yesNoValueChange.emit(this.yesNoValue);
  }
  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {}

  activate(option: boolean) {
    this.writeValue(option);
  }
}
