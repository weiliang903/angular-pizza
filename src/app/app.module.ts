import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PizzaAppModule } from './pizza-app/pizza-app.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PizzaAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
