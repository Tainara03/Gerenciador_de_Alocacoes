import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceRegisterComponent } from './resource-register.component';

describe('ResourceRegisterComponent', () => {
  let component: ResourceRegisterComponent;
  let fixture: ComponentFixture<ResourceRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceRegisterComponent]
    });
    fixture = TestBed.createComponent(ResourceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
