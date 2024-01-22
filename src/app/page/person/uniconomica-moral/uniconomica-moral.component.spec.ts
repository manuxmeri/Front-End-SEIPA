import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniconomicaMoralComponent } from './uniconomica-moral.component';

describe('UniconomicaMoralComponent', () => {
  let component: UniconomicaMoralComponent;
  let fixture: ComponentFixture<UniconomicaMoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniconomicaMoralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniconomicaMoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
