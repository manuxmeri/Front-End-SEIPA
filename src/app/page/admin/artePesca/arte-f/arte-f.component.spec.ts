import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArteFComponent } from './arte-f.component';

describe('ArteFComponent', () => {
  let component: ArteFComponent;
  let fixture: ComponentFixture<ArteFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArteFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArteFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
