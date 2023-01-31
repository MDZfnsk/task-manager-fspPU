import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Users } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  form: FormGroup;
  message_1 = '';
  message_2 = '';
  message_3 = '';
  hasErrorsEmail: boolean = false;
  hasErrorsUnm: boolean = false;
  hasErrorsPw: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control('', Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)),
      userName: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)

      ]))

    });

  }


  onSubmitForm(value: any) {
    
    /* START :- E-mail validation */

    if (this.form.controls['email'].hasError('pattern')) {
      this.message_1 = '* Please enter valid email adress';
      this.hasErrorsEmail = true;
    }
    else {
      this.message_1 = '';
      this.hasErrorsEmail = false;
    }

    /* END :- E-mail validation */








    /* START :- UserName validation */
    if (this.form.controls['userName'].hasError('required')) {
      this.message_2 = '* User Name is required';
      this.hasErrorsUnm = true;
    }
    else {
      this.message_2 = '';
      this.hasErrorsUnm = false;
    }

    /* END :- UserName validation */

    /* START :- Password validation */

    if (this.form.controls['password'].hasError('required')) {
      this.message_3 = '* Password is required';
      this.hasErrorsPw = true;
    }
    else if (this.form.controls['password'].hasError('pattern')) {
      this.message_3 = '* Invalid Password';
      alert('The Password should contanin atleast One Uppercase letter & One Number !!!');
      this.hasErrorsPw = true;
    }
    else {
      this.message_3 = '';
      this.hasErrorsPw = false;
    }
    /* END :- Password validation */




    const name = value.name;
    const email = value.email;
    const userName = value.userName;
    const password = value.password;




    if (!this.hasErrorsEmail && !this.hasErrorsUnm && !this.hasErrorsPw) {      
      const newUser= {name,email,userName,password};
      this.userService.addNewUser(newUser).subscribe((response: string)=> {
       
        alert('New User created..!! Welcome !!!!');
        this.router.navigate(['/home',response]);

        

      })


    }








  }



}
