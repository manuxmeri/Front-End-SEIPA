import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfiComponent } from './edit-ofi.component';

describe('EditOfiComponent', () => {
  let component: EditOfiComponent;
  let fixture: ComponentFixture<EditOfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOfiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
