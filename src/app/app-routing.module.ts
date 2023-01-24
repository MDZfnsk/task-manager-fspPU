import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListComponent } from './add-list/add-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'lists', component: ListsComponent},
  {path: 'add-list', component: AddListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
