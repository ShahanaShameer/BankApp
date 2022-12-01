import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname="";
  acno="";
  pswd="";
  constructor(private fb:FormBuilder , private ds:DataService,private router:Router) { }
  //registration model
  registerForm =this.fb.group({
    acno:[''],//array
    uname:[''],
    pswd:['']
  })

  //control pass to ts to html file 
  ngOnInit(): void {
  }
  register(){
    // alert('register clicked');
    console.log(this.registerForm);
    
    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;

    const result=this.ds.register(acno,uname,pswd);
    if(result){
      alert('Register successful')
      this.router.navigateByUrl('')
    }
    else{
      alert('User already registered');
      this.router.navigateByUrl('register')
    }
  }

}
