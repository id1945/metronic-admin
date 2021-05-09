import {
  waitForAsync,
  ComponentFixture,
  TestBed,
  getTestBed,
} from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { Routes, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserModel } from '../_models/user.model';
import { AuthService } from '../_services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const fakeAuth = {
  email: 'admin@demo.com',
  password: 'demo',
  roles: [2], // Manager
  authToken: 'auth-token-' + Math.random(),
  refreshToken: 'auth-token-' + Math.random(),
  expiresIn: new Date(Date.now() + 100 * 24 * 60 * 60 * 1000),
  pic: './assets/media/users/default.jpg',
};

const fakeRoutes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/logout', component: LogoutComponent },
  { path: 'auth/registration', component: RegistrationComponent },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
];

class FakeAuthService {
  registration(user: UserModel): Observable<UserModel> {
    return of(user);
  }
}

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let injector;
  let authService: AuthService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot(fakeRoutes),
      ],
      providers: [
        {
          provide: AuthService,
          useClass: FakeAuthService,
        },
      ],
      declarations: [RegistrationComponent],
    }).compileComponents();
    injector = getTestBed();
    authService = injector.get(AuthService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
