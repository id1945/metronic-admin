import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLIntegrationComponent } from './htmlintegration.component';

describe('HTMLIntegrationComponent', () => {
  let component: HTMLIntegrationComponent;
  let fixture: ComponentFixture<HTMLIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
