import { Component, OnInit } from '@angular/core';
import { Lists, Tasks } from '../types';
import { TasksService } from '../tasks.service';
import { ActivatedRoute, Params } from '@angular/router';
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
    private location: Location) {}

  listId: string = '';
  tasks: Tasks[] = [];

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      
      this.listId = params['listId'];
    })

    this.tasksService.getSelectedTasks(this.listId).subscribe((tasks: Tasks[]) => {
      this.tasks = tasks;
    })

    
    
  }

  onClick() {
    
    this.location.back();

  }

  onClickDelete(taskId: string) {
    console.log(taskId);
    this.tasksService.removeTask(taskId).subscribe((message) => {
      console.log(message)
      alert("Task Deleted !!!");
    })

  }

  

}
