import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { FilterByFieldPipe } from './filter-by-field-pipe';

@NgModule({
  declarations: [
    App,
    FilterByFieldPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}
