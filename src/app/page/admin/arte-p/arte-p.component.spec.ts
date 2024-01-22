import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtePComponent } from './arte-p.component';

describe('ArtePComponent', () => {
  let component: ArtePComponent;
  let fixture: ComponentFixture<ArtePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
