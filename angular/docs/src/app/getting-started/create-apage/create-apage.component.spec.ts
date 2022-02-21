import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAPageComponent } from './create-apage.component';

describe('CreateAPageComponent', () => {
  let component: CreateAPageComponent;
  let fixture: ComponentFixture<CreateAPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
