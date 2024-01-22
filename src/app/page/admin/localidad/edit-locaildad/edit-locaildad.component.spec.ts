import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLocaildadComponent } from './edit-locaildad.component';

describe('EditLocaildadComponent', () => {
  let component: EditLocaildadComponent;
  let fixture: ComponentFixture<EditLocaildadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLocaildadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLocaildadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
