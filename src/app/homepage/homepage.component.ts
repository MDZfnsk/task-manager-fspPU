import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

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

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
    ) {}

  userId: string ='';
  userNAME: string = '';

  

  onButtonClick(){


  }



  


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      
      this.userId = params['userId'];
      
      this.userService.getOneUser(this.userId).subscribe((name)=> {
       
        this.userNAME = name;

      })
      
    })

   
    
  }












}
