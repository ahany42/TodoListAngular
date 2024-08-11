import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPlaceholderComponent } from './task-placeholder.component';

describe('TaskPlaceholderComponent', () => {
  let component: TaskPlaceholderComponent;
  let fixture: ComponentFixture<TaskPlaceholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskPlaceholderComponent]
    });
    fixture = TestBed.createComponent(TaskPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
