import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { MouseoverDirective } from '../../directives/mouseover.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MouseoverDirective, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formGroup.value)
    this.authService.registerUser(this.formGroup.value)
      .subscribe({
        next: response => sessionStorage.setItem('user', JSON.stringify(response)),
        error: error => console.log(error)
      });
  }
}