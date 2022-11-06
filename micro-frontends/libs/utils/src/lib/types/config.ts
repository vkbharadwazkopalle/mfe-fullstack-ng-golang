import { HttpStatusCode } from "@angular/common/http";

  export interface Config {

    baseApiUrl: string;
    baseUrl: string;
  
    environment: Environment;
  }

  export enum Environment {
    DEV,
    LOCAL,
    PROD
  }

  export interface Response<T> {
    status: HttpStatusCode;
    message: string;
    data: T;
  } 

  export interface HttpParam {
    [key: string]: string
  }

