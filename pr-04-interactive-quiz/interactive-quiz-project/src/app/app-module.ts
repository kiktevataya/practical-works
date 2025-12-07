import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Quiz } from './quiz/quiz';
import { Question } from './question/question';

@NgModule({
  declarations: [
    App,
    Quiz,
    Question
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
