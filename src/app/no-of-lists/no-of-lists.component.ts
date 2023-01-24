import { Component, Input,Output,OnInit } from '@angular/core';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-no-of-lists',
  templateUrl: './no-of-lists.component.html',
  styleUrls: ['./no-of-lists.component.css']
})
export class NoOfListsComponent implements OnInit{

  @Input() showDate: Date | undefined; 

  number: string = '';


  constructor(private listService: ListsService) {}

  ngOnInit () {

    if(this.showDate){
      this.listService.getNoOfLists(this.showDate.toString()).subscribe(item => {
        this.number = item;
      })
    }

    


    

  }
  
  

}
