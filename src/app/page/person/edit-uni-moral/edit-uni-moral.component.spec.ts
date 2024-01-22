import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUniMoralComponent } from './edit-uni-moral.component';

describe('EditUniMoralComponent', () => {
  let component: EditUniMoralComponent;
  let fixture: ComponentFixture<EditUniMoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUniMoralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUniMoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
