import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadconofisicasComponent } from './unidadconofisicas.component';

describe('UnidadconofisicasComponent', () => {
  let component: UnidadconofisicasComponent;
  let fixture: ComponentFixture<UnidadconofisicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadconofisicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadconofisicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
