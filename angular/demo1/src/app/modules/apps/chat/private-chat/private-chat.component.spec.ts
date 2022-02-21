import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateChatComponent } from './private-chat.component';

describe('PrivateChatComponent', () => {
  let component: PrivateChatComponent;
  let fixture: ComponentFixture<PrivateChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
