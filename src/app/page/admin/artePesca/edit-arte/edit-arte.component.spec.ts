import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArteComponent } from './edit-arte.component';

describe('EditArteComponent', () => {
  let component: EditArteComponent;
  let fixture: ComponentFixture<EditArteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditArteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
