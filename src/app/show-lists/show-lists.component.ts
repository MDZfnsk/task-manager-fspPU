import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { ListsService } from '../lists.service';
import { Lists } from '../types';

@Component({
  selector: 'app-show-lists',
  templateUrl: './show-lists.component.html',
  styleUrls: ['./show-lists.component.css']
})
export class ShowListsComponent implements OnInit {

  lists: Lists[] = [];
  isLists: boolean = true;
  userId: string = '';

  constructor(
    private listService: ListsService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {


    this.route.params.subscribe((params: Params) => {
      
      this.userId = params['userId'];     
      
    })

   
    
    
    this.listService.getAllListsById(this.userId).subscribe((lists: Lists[]) =>{
      this.lists = lists;
      if(lists.length === 0){
        this.isLists = false;
      }
      else {
        this.isLists = true;
      }      
    });

  }

}
