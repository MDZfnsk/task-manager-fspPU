import { Component, OnInit} from '@angular/core';
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

  constructor(private listService: ListsService) {

  }

  ngOnInit() {

    
    this.listService.getAllLists().subscribe((lists: Lists[]) =>{
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
