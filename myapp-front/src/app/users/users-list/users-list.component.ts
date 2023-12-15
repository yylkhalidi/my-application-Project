import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit, OnDestroy {
  users!: User[];
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  private destroy$ = new Subject<void>();

  constructor(private userService: UserService) {
  }

  loadUsers() {
    this.userService.getUsers().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.users = data;
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.loadUsers();
        },
        error: (error) => {
          console.error(error)
        }
      })
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
