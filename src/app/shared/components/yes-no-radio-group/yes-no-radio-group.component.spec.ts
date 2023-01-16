import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoRadioGroupComponent } from './yes-no-radio-group.component';

describe('YesNoButtonGroupComponent', () => {
  let component: YesNoRadioGroupComponent;
  let fixture: ComponentFixture<YesNoRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YesNoRadioGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
