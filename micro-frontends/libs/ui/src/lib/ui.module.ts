import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [CommonModule],
  declarations: [...fromComponents.UIComponents, RegisterComponent],
  exports: [...fromComponents.UIComponents],
})
export class UiModule {}
