import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferncesComponent } from './refernces.component';

describe('ReferncesComponent', () => {
  let component: ReferncesComponent;
  let fixture: ComponentFixture<ReferncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
