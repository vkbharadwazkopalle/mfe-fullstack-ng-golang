import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('../modules/projects/projects.module').then(m => m.ProjectsModule)
          }
        ]
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
