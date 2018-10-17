import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<div>
        <input type="checkbox" id="" [(ngModel)]="checkAllValue" (click)="checkAll()" />全选{{checkAllValue}}
        <input type="text" [(ngModel)]="userName" />
        <button (click)="addUser()">添加</button>
        <button (click)="delCheck()">删除选中状态</button>
      </div>
      <table>
        <thead>
            <tr>
                <td>名称</td>
                <td>状态</td>
                <td>操作</td>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let item of users,let i=index">
                <td><input type="checkbox" [(ngModel)]="item.selected" (click)="changeSelected(i)" /></td>
                <td>{{item.name}}</td>
                <td><input type="checkbox" name="" [(ngModel)]="item.state" (click)="check(i)">{{item.state|statepipe}}</td>
                <td><button (click)="delItem(i)">删除</button></td>
            </tr>
        </tbody>
      </table>
      <p>以下是管道部分,其中自带管道：date/uppercase/lowercase/slice/number</p>
      <p>{{obj.num}}->{{obj.num|numpipe:'5'}}</p>
      <p>{{obj.date}}->{{obj.date|date:'y-MM-dd HH:mm:ss'}}</p>
      <p>{{obj.str}}->{{obj.str|uppercase}}</p>
      <p>{{obj.str2}}->{{obj.str2|lowercase}}</p>
      <p>{{obj.str}}->{{obj.str|slice:1:3}}</p>
      <p>{{obj.n}}->{{obj.n|number:'4.1-2'}}</p>
`,
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
  obj={
    num:10,
    date:new Date(),
    str:'Hello',
    str2:"HELLO",
    n:1.4567
  }
  
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
    this.users[i].selected=!this.users[i].selected;
  }
  check(i){
    console.log("check",i);
   this.users[i].state= !this.users[i].state;
   //this.selected.push(i);
  }
  
  delItem(i){
    console.log("delItem");
    this.users.splice(i,1);
  }
}