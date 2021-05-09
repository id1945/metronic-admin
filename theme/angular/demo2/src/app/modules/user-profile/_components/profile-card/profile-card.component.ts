import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserModel } from '../../../auth';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  user$: Observable<UserModel>;
  constructor(public userService: AuthService) {
    this.user$ = this.userService.currentUserSubject.asObservable();
  }
}
