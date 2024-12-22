import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoService } from './todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodolistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
