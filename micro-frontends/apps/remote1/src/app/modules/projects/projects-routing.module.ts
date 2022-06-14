import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListContainerComponent } from './containers/project-list-container/project-list-container.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
