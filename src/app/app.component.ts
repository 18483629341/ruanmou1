import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls:['./app.component.css']

})
export class AppComponent {
  users:Array<object>=[
    {selected:false,name:"lisa",state:true},
    {selected:true,name:"Ashely",state:false},
    {selected:true,name:"luy",state:true}
  ];
  checkAllValue:boolean=false;
  userName:string;
  selected:any;
  checkAll(){
    console.log("checkAll");
    this.checkAllValue=!this.checkAllValue;
    this.users.forEach(element => {
       element.selected=this.checkAllValue;
    });
  }
 
  addUser(){
    console.log("addUser");
     var obj={name:this.userName,state:!this.checkAllValue};
     this.users.push(obj);
  }
  delCheck(){
    
    this.users.forEach((element,i) => {
      if(element.selected){
        console.log(element);
        this.users.splice(i,1);
      }
     
   })
  }
  changeSelected(i){
   // this.users[i].selected=!this.users[i].selected;
  }
  check(i){
    console.log("check",i);
  // this.users[i].state= !this.users[i].state;
   //this.selected.push(i);
  }
  
  delItem(i){
    console.log("delItem");
    this.users.splice(i,1);
  }
}