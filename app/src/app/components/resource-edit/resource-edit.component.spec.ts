import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceEditComponent } from './resource-edit.component';

describe('ResourceEditComponent', () => {
  let component: ResourceEditComponent;
  let fixture: ComponentFixture<ResourceEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceEditComponent]
    });
    fixture = TestBed.createComponent(ResourceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
