import { Injectable } from '@angular/core';
import { SignupRequestPayload } from '../register/signup-request.payload';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.http.post(
      'http://localhost:8761/register-service/api/auth/signup',
      signupRequestPayload,
      { responseType: 'text' }
    );
  }
}