import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListContainerComponent } from './project-list-container.component';

describe('ProjectListContainerComponent', () => {
  let component: ProjectListContainerComponent;
  let fixture: ComponentFixture<ProjectListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectListContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
