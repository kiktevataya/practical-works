import { Component, OnInit } from '@angular/core';
import { Api } from './api';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements OnInit {

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getPosts().subscribe();
    this.api.getUsers().subscribe();
  }
}
