import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { AuthRequest } from '@shared/interfaces/auth-request';
import { AuthResponse } from '@shared/interfaces/auth-response';
import { RegisterRequest } from '@shared/interfaces/register-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL: string = '';
  constructor(private http: HttpClient) {
    this.API_URL = environment.api_url;
  }

  AuthenticateAsync(body: AuthRequest) {
    const uri = this.API_URL + 'account/authenticate';
    return this.http.post<AuthResponse>(uri, body);
  }

  RegisterAsync(body: RegisterRequest) {
    const uri = this.API_URL + 'account/register';
    return this.http.post<AuthResponse>(uri, body);
  }
}
