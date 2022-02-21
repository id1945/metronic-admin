import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsExamplesComponent } from './widgets-examples.component';

describe('WidgetsExamplesComponent', () => {
  let component: WidgetsExamplesComponent;
  let fixture: ComponentFixture<WidgetsExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
