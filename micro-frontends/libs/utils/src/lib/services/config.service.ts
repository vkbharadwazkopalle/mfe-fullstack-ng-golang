import { Injectable } from '@angular/core';
import { Config, Environment } from '../types';

import { ConfigLocal } from '../config/config.local';

@Injectable({
  providedIn: 'root'
})
export class ConfigService implements Config {

  public baseApiUrl: string;
  public baseUrl: string;

  public environment: Environment;

  constructor() { 
    this.baseApiUrl = ConfigLocal.baseApiUrl
    this.baseUrl = ConfigLocal.baseUrl

    this.environment = ConfigLocal.environment;
  }

}
