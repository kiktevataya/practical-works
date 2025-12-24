import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Api } from './api';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html'
})
export class App implements OnInit {

  selectedUserId$ = new BehaviorSubject<number>(1);

  users: any[] = [];
  posts: any[] = [];

  constructor(private api: Api) {}

  ngOnInit(): void {

    this.api.getUsers().subscribe(users => {
      this.users = users;
    });

    this.selectedUserId$
      .pipe(
        switchMap(userId =>
          this.api.getPostsByUserId(userId)
        )
      )
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  selectUser(id: number) {
    this.selectedUserId$.next(id);
  }
}
