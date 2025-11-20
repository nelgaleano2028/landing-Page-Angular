import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['',[Validators.required, Validators.email]],
      city: ['', [Validators.required]]
    });
  }

  enviar(event: Event) {
    event.preventDefault();
    alert(JSON.stringify(this.contactForm.value));
    this.contactForm.reset();
  }
}