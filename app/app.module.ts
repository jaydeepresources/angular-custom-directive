import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorDirective } from './color.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
