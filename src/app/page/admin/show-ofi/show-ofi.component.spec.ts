import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOfiComponent } from './show-ofi.component';

describe('ShowOfiComponent', () => {
  let component: ShowOfiComponent;
  let fixture: ComponentFixture<ShowOfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOfiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
