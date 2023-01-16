import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from './shared/animations/fade';
import { ModalRef } from './shared/components/modal/modal';
import { ModalService } from './shared/components/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade],
})
export class AppComponent implements OnInit {
  @ViewChild('modalUser') modalTemplateRef!: TemplateRef<any>;
  @ViewChild('templateModal') templateModal!: TemplateRef<any>;
  @ViewChild('templateGroup') templateGroup!: TemplateRef<any>;
  title = 'Accessible elements';
  info = false;
  modalRef!: ModalRef;
  formModal!: FormGroup;
  yesNoValue: boolean = false;
  yesNoValueSecond: boolean = false;
  formButtonGroup!: FormGroup;
  formRadioGroup!: FormGroup;
  currentTemplate!: TemplateRef<any>;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formModal = this.formBuilder.group({
      firstName: ['Elcio', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false],
    });
    this.formButtonGroup = this.formBuilder.group({
      yesNoAnswerButton: [null],
    });
    this.formRadioGroup = this.formBuilder.group({
      yesNoAnswerRadio: [null],
    });
  }

  showModal(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User details',
    });
  }

  chooseTemplate(templateChosen: string): void {
    if (templateChosen === 'templateModal')
      this.currentTemplate = this.templateModal;
    else if (templateChosen === 'templateGroup')
      this.currentTemplate = this.templateGroup;
  }

  submitModalForm() {
    if (this.formModal.invalid) return;

    console.log(this.formModal.value);
    this.modalRef.close();
  }
  submitButtonGroup() {
    const value = this.formButtonGroup.get('yesNoAnswerButton')?.value;
    alert(
      value !== null
        ? `Chosen option: ${value ? 'Yes' : 'No'}`
        : `No option chosen `
    );
  }
  submitRadioGroup() {
    const value = this.formRadioGroup.get('yesNoAnswerRadio')?.value;
    alert(
      value !== null
        ? `Chosen option: ${value ? 'Yes' : 'No'}`
        : `No option chosen `
    );
  }
}
