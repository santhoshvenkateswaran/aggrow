import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required],
    });
  }

  onSubmit(formData): void {
    document.location.href =
      'mailto:hello@santhosh.page?subject=AGGROW%20-%20regarding&body=' +
      formData.message +
      '%0A%0A%0AName:' +
      formData.name +
      '%0A%0AEmail:' +
      formData.email +
      '%0AMobile:' +
      formData.phone;
  }
}
