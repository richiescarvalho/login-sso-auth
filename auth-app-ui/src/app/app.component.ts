import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  auth = Inject(AuthService);
  password: any;
  email: any;

  loginWithOAuth(provider: string) {
    this.auth.loginWithOAuth(provider);
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
