import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginathentication',
  templateUrl: './loginathentication.component.html',
  styleUrls: ['./loginathentication.component.css']
})
export class LoginathenticationComponent implements OnInit {
  loginform:FormGroup;
  pre_username='abc@gmail.com';
  pre_password='abc@123';
  error='';
  constructor(private fb:FormBuilder, private router:Router) { 
    this.loginform=fb.group(
      {
        'username':['',[Validators.required]],
        'pass':['',[Validators.required]]
      }
    );
  }

  ngOnInit(): void {
  }

  onsubmit(){
    //console.log(this.loginform.valid);
    if(this.loginform.valid==false){
      if(this.loginform.controls.username.valid==false && this.loginform.controls.pass.valid==false){
        this.error="Username and Password are required."
      }else{
        if(this.loginform.controls.username.valid==false){
          this.error="Username is required.";
        }else{
          this.error="";
        }
        if(this.loginform.controls.pass.valid==false){
          this.error="Password is required.";
        }else{
          this.error="";
        }
      }
    }else{
      if(this.loginform.controls.username.value==this.pre_username && this.loginform.controls.pass.value==this.pre_password){
        this.router.navigate(['admin/dashboard'+'/'+this.pre_username]);
      }else{
        this.error="You enter a wrong log in credential.";
      }
    }
  }

}
