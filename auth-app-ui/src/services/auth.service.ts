import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  loginWithEmail(data: { email: string; password: string }) {
    return this.http.post('/api/auth/login', data);
  }

  signUpWithEmail(data: { email: string; password: string }) {
    return this.http.post('/api/auth/signup', data);
  }

  loginWithOAuth(provider: 'google' | 'github') {
    window.location.href = `/oauth2/authorization/${provider}`; // Redirect to backend
  }
}
