
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {

registerForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required, this.noSpacesValidator()]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  noSpacesValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasSpace = /\s/.test(control.value);
      return hasSpace ? { hasSpace: true } : null;
    };
  }

  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log('Form Submitted:', this.registerForm.value);
    }
  }

  get f() {
    return this.registerForm.controls;
  }


}
