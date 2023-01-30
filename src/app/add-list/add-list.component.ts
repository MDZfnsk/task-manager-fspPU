import { Component, Input, Output, OnInit } from '@angular/core';
import { ListsService  } from '../lists.service';
import { Lists } from '../types';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  date: string = '';
  newListName: string = '';
  updatedList: Lists[] = [];

  constructor(private listService: ListsService, private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {
      this.route.queryParams.subscribe(params => {
      this.date = new Date(params['date']).toString();

    });

  }

  onAddListClick(){
   
    
    this.listService.addList(this.newListName,this.date).subscribe((item:Lists[])=>{
      alert("Successfuly Added to the Database !!!");
      this.updatedList = item;
      
      this.router.navigateByUrl('/');     

    })

  }

  


}
