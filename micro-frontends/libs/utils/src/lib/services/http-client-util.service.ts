import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { map, Observable, switchMap } from 'rxjs';

import { HttpParam, Response } from '../types';

@Injectable({
  providedIn: 'root'
})
export class HttpClientUtilService {

  constructor(
    private config: ConfigService,
    private httpClient: HttpClient
  ) { }

  public buildUrl(url:string): string {
    return this.config.baseApiUrl + url;
  }

  public get(url: string, payload: any): Observable<any> {

    return this.httpClient.get(
      this.buildUrl(url),
      { params: payload }
    );

  }

  public post(url: string, body: any): Observable<any> {

    return this.httpClient.post(
      this.buildUrl(url),
      body
    );

  }
}
