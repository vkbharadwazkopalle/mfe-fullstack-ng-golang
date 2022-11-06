import { ConfigService } from "./config.service";
import { HttpClientUtilService } from './http-client-util.service';

export const UtilServices = [
  ConfigService,
  HttpClientUtilService
];

export * from './config.service';
export * from './http-client-util.service';
