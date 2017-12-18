import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PizzaAppComponent } from './containers/pizza-app/pizza-app.component';

import { PizzaViewerComponent } from './components/pizza-viewer/pizza-viewer.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaCreatorComponent } from './components/pizza-creator/pizza-creator.component';


@NgModule({
  declarations: [
    PizzaAppComponent,
    PizzaViewerComponent,
    PizzaFormComponent,
    PizzaCreatorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    // exports 不是很清楚, import 一个组件,通过元数据包装
    PizzaAppComponent
  ]
})
export class PizzaAppModule { }
