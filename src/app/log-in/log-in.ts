import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-in',
  imports: [FormsModule, CommonModule],
  templateUrl: './log-in.html',
  styleUrl: './log-in.scss',
})
export class LogIn {
  user = {
    email: '',
    password: '',
  };

  submitted = false;

  onSubmit(form: any) {
    this.submitted = true;
    if (form.valid) {
      console.log('Form submitted:', this.user);
    }
  }
}
