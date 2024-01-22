import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnidadFComponent } from './edit-unidad-f.component';

describe('EditUnidadFComponent', () => {
  let component: EditUnidadFComponent;
  let fixture: ComponentFixture<EditUnidadFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUnidadFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnidadFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
