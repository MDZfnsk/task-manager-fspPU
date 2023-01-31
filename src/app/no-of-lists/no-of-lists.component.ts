import { Component, Input,Output,OnInit } from '@angular/core';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-no-of-lists',
  templateUrl: './no-of-lists.component.html',
  styleUrls: ['./no-of-lists.component.css']
})
export class NoOfListsComponent implements OnInit{

  @Input() 
  showDate?: Date; 
  
  @Input() 
  userId?: string

  number: string = '';


  constructor(private listService: ListsService) {
    
  }
  

  ngOnInit () {

    if(this.showDate && this.userId){
      this.listService.getNoOfLists(this.showDate.toString(),this.userId).subscribe(item => {
        this.number = item;
      })
    }

    

    


    

  }
  
  

}
