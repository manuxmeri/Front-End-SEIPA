import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituniconomicafisicaComponent } from './edituniconomicafisica.component';

describe('EdituniconomicafisicaComponent', () => {
  let component: EdituniconomicafisicaComponent;
  let fixture: ComponentFixture<EdituniconomicafisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituniconomicafisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituniconomicafisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
