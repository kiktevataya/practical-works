import { Component, OnInit } from '@angular/core';
import { AppLogic } from './app-logic';

@Component({
  selector: 'app-root',
   standalone: false,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  data: string[] = [];

  constructor(private logic: AppLogic) {}

  ngOnInit(): void {
    this.data = this.logic.getDataAndLog();
  }
}
