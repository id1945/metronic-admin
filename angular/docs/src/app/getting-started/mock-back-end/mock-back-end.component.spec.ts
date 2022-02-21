import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockBackEndComponent } from './mock-back-end.component';

describe('MockBackEndComponent', () => {
  let component: MockBackEndComponent;
  let fixture: ComponentFixture<MockBackEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockBackEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
