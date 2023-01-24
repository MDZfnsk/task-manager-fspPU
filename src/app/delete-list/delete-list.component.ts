import { Component,Input } from '@angular/core';
import { Lists } from '../types';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-delete-list',
  templateUrl: './delete-list.component.html',
  styleUrls: ['./delete-list.component.css']
})
export class DeleteListComponent {

  @Input()
  selectedList!: Lists;

  constructor(private listService: ListsService) {}


  onClickDelete() {

    this.listService.removeList(this.selectedList._id).subscribe(()  => {
      alert("Successfuly Added to the Database !!!");
      location.reload();
    })

    console.log(this.selectedList._id);
    

  }

 

}
