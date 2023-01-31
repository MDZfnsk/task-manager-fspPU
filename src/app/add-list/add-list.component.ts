import { Component, Input, Output, OnInit } from '@angular/core';
import { ListsService  } from '../lists.service';
import { Lists } from '../types';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  date: string = '';
  newListName: string = '';
  updatedList: Lists[] = [];
  userId: string = '';

  constructor(
    private listService: ListsService,
    private router: Router, 
    private route: ActivatedRoute,
    private location: Location) {}


  ngOnInit() {
      this.route.queryParams.subscribe(params => {
      this.date = new Date(params['date']).toString();
      this.userId = params['userId'];
      console.log(this.userId);

    });

  }

  onAddListClick(){
   
    
    this.listService.addList(this.newListName,this.date,this.userId).subscribe((item:Lists[])=>{
      alert("Successfuly Added to the Database !!!");
      this.updatedList = item;

      this.location.back()    

    })

  }

  onBackClick(){
    this.location.back()
  }

  


}
