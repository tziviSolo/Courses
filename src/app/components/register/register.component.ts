import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService) {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.registerUser(this.formGroup.value);
  }
}
