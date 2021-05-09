import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';

@NgModule({
  declarations: [UsersComponent, RolesComponent, UserManagementComponent],
  imports: [CommonModule, UserManagementRoutingModule],
})
export class UserManagementModule {}
