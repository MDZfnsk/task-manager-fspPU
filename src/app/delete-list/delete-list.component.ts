import { Component,Input,OnInit } from '@angular/core';
import { Lists } from '../types';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-delete-list',
  templateUrl: './delete-list.component.html',
  styleUrls: ['./delete-list.component.css']
})
export class DeleteListComponent implements OnInit {

  @Input()
  selectedList!: Lists;

 

  constructor(private listService: ListsService) {}

  ngOnInit(){
  

  }


  onClickDelete() {
    console.log(this.selectedList._id);

    this.listService.removeList(this.selectedList._id).subscribe(()  => {
      alert("Successfuly Deleted from Database !!!");
      location.reload();
    })

    console.log(this.selectedList._id);
    

  }

 

}
