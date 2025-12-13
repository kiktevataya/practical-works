import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ConfigurableHighlightDirective } from './configurable-highlight.directive';

@NgModule({
  declarations: [
    App,
    ConfigurableHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
