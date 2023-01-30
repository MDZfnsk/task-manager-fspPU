import { Location } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Tasks } from '../types';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  taskID: string = '';
  editedTask?: Tasks;
  newTaskName: string = '';
  
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private taskService: TasksService) {}

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      
      this.taskID = params['taskId'];
      
    })
    
  }

  onEditClick(){
   
    this.taskService.editTask(this.taskID,this.newTaskName).subscribe((tasks: Tasks[])=> {
      
      alert("Record Updated Successfully.. !!!");
      window.location.reload();
      this.location.back();
    })

  }



  onClick(){
    this.location.back();
  }

}
