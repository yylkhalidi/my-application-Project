import {Routes} from '@angular/router';
import {UsersListComponent} from "./users/users-list/users-list.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";

export const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {
    path: 'users',
    children: [
      {path: '', component: UsersListComponent},
      {path: ':id', component: UserEditComponent},
      {path: 'create', component: UserEditComponent},
    ],
  }
];
