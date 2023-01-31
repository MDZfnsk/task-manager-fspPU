
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../types';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      userName: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required)


    });
  }

  form: FormGroup;
  message_1 = '';
  message_2 = '';
  hasErrors: boolean = false;



  ngOnInit(): void {



  }

  onSubmitForm(formValue: any) {


    if (this.form.controls['userName'].hasError('required')) {
      this.message_1 = 'User Name is required';
      this.hasErrors = true;
    }
    else {
      this.message_1 = '';
      this.hasErrors = false;
    }



    if (this.form.controls['password'].hasError('required')) {
      this.message_2 = 'User Name is required';
      this.hasErrors = true;
    }
    else {
      this.message_2 = '';
      this.hasErrors = false
    }

    const unm = formValue.userName;
    const psw = formValue.password;

    if (!this.hasErrors) {
      

      this.userService.userAuthentication(unm,psw).subscribe((response: any)=> {
        


        if(response.status === 'Valid'){
          this.router.navigate(['/home',response.userId]);
        }else{
          alert('Invalid Credentials !!! Please Check Again..');
        }

      })

      }

    }





  }



