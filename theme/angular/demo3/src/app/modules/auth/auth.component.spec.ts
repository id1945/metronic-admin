import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthComponent} from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <h3> with text </h3>', () => {
    const authComponent: HTMLElement = fixture.nativeElement;
    const h3 = authComponent.querySelector('h3');
    expect(h3.textContent).toMatch(/discover amazing metronic with great build tools/i);
  });

  it('should have links in the footer', () => {
    const FOOTER_LINKS = [ 'Terms', 'Plans', 'Contact Us' ];
    const authComponent: HTMLElement = fixture.nativeElement;
    const links = Array.from(authComponent.querySelectorAll('a'))
      .filter(node => node.classList.contains('font-size-h5'))
      .map(node => node.textContent);

    expect(links.length).toBeGreaterThanOrEqual(3);
    expect(links.join(' ')).toEqual(FOOTER_LINKS.join(' '));
  });
});
