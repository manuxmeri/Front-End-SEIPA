import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniconomicamoralComponent } from './uniconomicamoral.component';

describe('UniconomicamoralComponent', () => {
  let component: UniconomicamoralComponent;
  let fixture: ComponentFixture<UniconomicamoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniconomicamoralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniconomicamoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
