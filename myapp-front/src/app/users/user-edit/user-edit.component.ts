import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit, OnDestroy {
  user: User = {id: null, name: '', email: ''};
  private destroy$ = new Subject<void>();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      console.log("userId", userId);
      if (userId && /^\d+$/.test(userId)) {
        this.userService.getUserById(+userId).pipe(takeUntil(this.destroy$)).subscribe(data => {
          this.user = data;
        });
      } else {
        this.user = {id: null, name: '', email: ''};
      }
    });
  }

  saveUser(): void {
    if (this.user.id) {
      this.userService.updateUser(this.user).pipe(takeUntil(this.destroy$)).subscribe(response => {
        // Handle response here
        // Possibly navigate back to the users list
        this.router.navigate(['/users']);
      });
    } else {
      this.userService.addUser(this.user).pipe(takeUntil(this.destroy$)).subscribe(response => {
        // Handle response here
        this.router.navigate(['/users']);
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
