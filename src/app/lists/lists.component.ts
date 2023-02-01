import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListsService } from '../lists.service';
import { Lists } from '../types';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists: Lists[] = [];

  date: Date = new Date();  
  isLists: boolean = true;
  userId: string = '';

  constructor(
    private route: ActivatedRoute, 
    private listService: ListsService, 
    private location:Location,
    private router: Router) {

  }

  ngOnInit(): void {


    //Accessing the dates passed into the component as queryParams and assigning it to a local variable.
    this.route.queryParams.subscribe(params => {
      this.date = new Date(params['date']);
      this.userId = params['userId'];
     

    });
 

    
     this.listService.getListsByIdnDate(this.date.toString(),this.userId).subscribe(lists => {      
      this.lists = lists ;
      if(lists.length === 0){
        this.isLists = false;
      }
      else {
        this.isLists = true;
      }
      
    })    

   
  }

  onClick() {
    
    
    this.location.back();

  }



}



