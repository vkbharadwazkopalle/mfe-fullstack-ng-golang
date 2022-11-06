import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import * as fromServices from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ...fromServices.UtilServices
  ]
})
export class UtilsModule {}
