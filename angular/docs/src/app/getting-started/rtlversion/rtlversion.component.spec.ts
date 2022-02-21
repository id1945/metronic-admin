import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTLVersionComponent } from './rtlversion.component';

describe('RTLVersionComponent', () => {
  let component: RTLVersionComponent;
  let fixture: ComponentFixture<RTLVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTLVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RTLVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
