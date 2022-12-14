import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //deposite properties
  acno="";
  pswd="";
  amount="";
  //withdraw properties
  acno1="";
  pswd1="";
  amount1="";
  //current user properties
  user="";

  constructor(private ds:DataService) {
    this.user=this.ds.currentUser
   }

  ngOnInit(): void {
  }
  deposite(){
    // alert('clicked')
    var acno=this.acno;
    var pswd=this.pswd;
    var amount=this.amount;
    const result=this.ds.deposite(acno,pswd,amount);
    if(result){
      alert(`${amount} is credited....available balance is ${result}`)
    }
  }
  withdraw(){
    // alert('clicked')
    var acno=this.acno1;
    var pswd=this.pswd1;
    var amount=this.amount1;
    const result=this.ds.withdraw(acno,pswd,amount);
    if(result){
      alert(`${amount} is debited....available balance is ${result}`)
    }
  
  }

}
