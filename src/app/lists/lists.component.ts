import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ListsService } from '../lists.service';
import { Lists } from '../types';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists: Lists[] = [];

  date: Date = new Date();

  

  

  constructor(private route: ActivatedRoute, private datePipe: DatePipe, private listService: ListsService) {

  }

  ngOnInit(): void {


    //Accessing the dates passed into the component as queryParams and assigning it to a local variable.
    this.route.queryParams.subscribe(params => {
      this.date = new Date(params['date']);

    });

    //Calling the getLists() function and passing the date as a parameter to the function
    this.listService.getLists(this.date.toString()).subscribe(lists => {

      //as the response sends and array of objects and we only need to display the list name
      //we make a new array by mapping only the name properties of the recieved object
      // this.lists = lists.map(item => item.name);

      this.lists = lists ;
      
    })

   
  }



}



