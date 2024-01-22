import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOficinaComponent } from './edit-oficina.component';

describe('EditOficinaComponent', () => {
  let component: EditOficinaComponent;
  let fixture: ComponentFixture<EditOficinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOficinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
