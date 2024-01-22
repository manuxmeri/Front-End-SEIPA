import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniconomicaComponent } from './uniconomica.component';

describe('UniconomicaComponent', () => {
  let component: UniconomicaComponent;
  let fixture: ComponentFixture<UniconomicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniconomicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniconomicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
