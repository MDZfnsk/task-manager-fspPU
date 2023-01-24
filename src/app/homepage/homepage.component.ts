import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  next7Days: Date[] = Array(7).fill(null).map((_,i) => {
		const date = new Date();
		date.setDate(date.getDate() + i);
		return date;
	});

  

  onButtonClick(){


  }



  


  ngOnInit(): void {

   
    
  }

}
