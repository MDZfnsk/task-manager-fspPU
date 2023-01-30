import { Component, OnInit } from '@angular/core';
import { Lists, Tasks } from '../types';
import { TasksService } from '../tasks.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.css']
})
export class TasksViewComponent implements OnInit {

  constructor(
    private tasksService: TasksService, 
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) {}

  listId: string = '';
  tasks: Tasks[] = [];
  isTasks: boolean = true;

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      
      this.listId = params['listId'];
    })

    this.tasksService.getSelectedTasks(this.listId).subscribe((tasks: Tasks[]) => {
      this.tasks = tasks;
      if(tasks.length === 0){
        this.isTasks = false;
      }
      else {
        this.isTasks = true;
      }
    })

    
    
  }

  //Send user back one page
  onClick() {
    
    this.location.back();

  }


  //Remove the selected Task rom the Database
  onClickDelete(taskId: string) {
    
    this.tasksService.removeTask(taskId).subscribe((tasks: Tasks[]) => {
      
      alert("Item deleted Successfully");
      window.location.reload();
    })
    
  }


  //Add new task to the Database
  onAddClick(){
    this.router.navigate(['/addTask',this.listId]);
  }

  //Marking the Task as Completed
  onMarkClick(id: string,status:boolean){
    this.tasksService.markTaskComplete(id,status).subscribe((tasks: Tasks[])=> {
      console.log("Wade Hari");
      window.location.reload();

    })

  }

    
    

  

}
