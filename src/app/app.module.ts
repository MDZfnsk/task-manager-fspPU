import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListsComponent } from './lists/lists.component';
import { AddListComponent } from './add-list/add-list.component';


import { DatePipe } from '@angular/common';
import { NoOfListsComponent } from './no-of-lists/no-of-lists.component';
import { DeleteListComponent } from './delete-list/delete-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListsComponent,
    AddListComponent,
    NoOfListsComponent,
    DeleteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
