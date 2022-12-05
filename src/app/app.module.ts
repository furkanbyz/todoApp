import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
