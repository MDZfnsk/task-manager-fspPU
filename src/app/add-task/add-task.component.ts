import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Tasks } from '../types';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTaskName: string = '';
  listID: string = '';

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private taskService: TasksService) {}

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.listID=params['listId'];      
    })


    
  }

  onClick(){
    this.location.back();
  }

  onAddClick(){
    this.taskService.addTask(this.newTaskName,this.listID).subscribe((tasks: Tasks[])=> {
      
      alert("Task Added Successfully.. !!!");
      window.location.reload();
      this.location.back();

    })
    
  }
 
}
