import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedWidget9Component } from './mixed-widget9.component';

describe('MixedWidget9Component', () => {
  let component: MixedWidget9Component;
  let fixture: ComponentFixture<MixedWidget9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedWidget9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedWidget9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
