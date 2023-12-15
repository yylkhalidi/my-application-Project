import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersListComponent} from "./users-list/users-list.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [UsersListComponent, UserEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    RouterLink
  ],
  providers: [
    UserService
  ]
})
export class UsersModule {
}
