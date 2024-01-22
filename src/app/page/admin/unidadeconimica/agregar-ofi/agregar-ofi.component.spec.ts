import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarOfiComponent } from './agregar-ofi.component';

describe('AgregarOfiComponent', () => {
  let component: AgregarOfiComponent;
  let fixture: ComponentFixture<AgregarOfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarOfiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarOfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
