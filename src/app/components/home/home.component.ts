import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgmEmailComponent } from "../ngm-email/ngm-email.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet, NgmEmailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
