import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbarcamenorComponent } from './embarcamenor.component';

describe('EmbarcamenorComponent', () => {
  let component: EmbarcamenorComponent;
  let fixture: ComponentFixture<EmbarcamenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbarcamenorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbarcamenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
