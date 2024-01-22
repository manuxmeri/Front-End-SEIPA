import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacuicolaComponent } from './instalacuicola.component';

describe('InstalacuicolaComponent', () => {
  let component: InstalacuicolaComponent;
  let fixture: ComponentFixture<InstalacuicolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstalacuicolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacuicolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
