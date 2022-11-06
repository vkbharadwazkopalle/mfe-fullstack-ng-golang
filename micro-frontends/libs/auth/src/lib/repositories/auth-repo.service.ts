import { Injectable } from '@angular/core';
import { HttpClientUtilService, Login, Register, Response } from '@micro-frontends/utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRepoService {

  constructor(
    private http: HttpClientUtilService
  ) { }

  public login(payload: Login): Observable<Response<string>>{

    return this.http.get('login', payload);

  }

  public register(payload: Register): Observable<Response<string>>{

    return this.http.get('login', payload);

  }
}
