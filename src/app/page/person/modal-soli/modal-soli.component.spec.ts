import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSoliComponent } from './modal-soli.component';

describe('ModalSoliComponent', () => {
  let component: ModalSoliComponent;
  let fixture: ComponentFixture<ModalSoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
