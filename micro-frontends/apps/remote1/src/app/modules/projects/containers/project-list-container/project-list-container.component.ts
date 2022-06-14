import { Component, OnInit } from '@angular/core';
import { IProject } from '@micro-frontends/utils';

import { projects } from '../../projects';

@Component({
  selector: 'micro-frontends-project-list-container',
  templateUrl: './project-list-container.component.html',
  styleUrls: ['./project-list-container.component.scss'],
})
export class ProjectListContainerComponent implements OnInit {

  projectList: IProject[] = [];

  ngOnInit(): void {

    this.projectList = projects; 

  }

}
