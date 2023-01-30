import { Component,Input,OnInit } from '@angular/core';
import { Lists } from '../types';
import { ListsService } from '../lists.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-list',
  templateUrl: './delete-list.component.html',
  styleUrls: ['./delete-list.component.css']
})
export class DeleteListComponent implements OnInit {

 listId: string = '';

 

  constructor(
    private route: ActivatedRoute,
    private listService: ListsService,
    private location: Location) {}

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      this.listId=params['listId'];      
    }) 

  }

  onClickDelete() {
    this.listService.removeList(this.listId).subscribe(()  => {
          alert("Successfuly Deleted from Database !!!");
          window.location.reload();
          this.location.back();
        })

  }


  // onClickDelete() {
    

  //   this.listService.removeList(this.selectedList._id).subscribe(()  => {
  //     alert("Successfuly Deleted from Database !!!");
  //     location.reload();
  //   })

    
    

  // }

 

}
