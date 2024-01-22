import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbarcamayorComponent } from './embarcamayor.component';

describe('EmbarcamayorComponent', () => {
  let component: EmbarcamayorComponent;
  let fixture: ComponentFixture<EmbarcamayorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbarcamayorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbarcamayorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
