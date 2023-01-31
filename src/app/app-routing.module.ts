import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListComponent } from './add-list/add-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteListComponent } from './delete-list/delete-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListsComponent } from './lists/lists.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TasksViewComponent } from './tasks-view/tasks-view.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home/:userId', component: HomepageComponent},
  {path:'lists', component: ListsComponent},
  {path: 'add-list', component: AddListComponent},
  {path:'tasks/:listId', component: TasksViewComponent},
  {path:'editTasks/:taskId', component: EditTaskComponent},
  {path:'addTask/:listId', component: AddTaskComponent},
  {path: 'deleteList/:listId', component: DeleteListComponent},
  {path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
