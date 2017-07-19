import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { UsersService } from './user/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivatedObsSubscription: Subscription;

  user1Activated = false;
  user2Activated = false;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.userActivatedObsSubscription = this.usersService.userActivated.subscribe((id: number) => {
      if (id === 1) {
        this.user1Activated = true;
      } else if (id === 2) {
        this.user2Activated = true;
      }
    });
  }

  ngOnDestroy() {
    this.userActivatedObsSubscription.unsubscribe();
  }

}
