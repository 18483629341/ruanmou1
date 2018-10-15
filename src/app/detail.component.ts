import { Component, Input, Output} from '@angular/core';
import { EventEmitter } from 'events';

interface Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'app-detail',
  template: `
    <div *ngIf="props">
      <h2>{{props.name}} details!</h2>
      <div><label>id: </label>{{props.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="props.name" placeholder="name"/>
        <button (click)="parentChange()">子调父</button>
      </div>
    </div>

  `,
// inputs:['props:hero']//别名：属性名称
  
})
export class DetailComponent {
  @Input() props:Hero;
  //@Input 装饰器 输入属性 实现父组件向子组件传递 参数
  //@Input('props') props:Hero;
  @Output() changeNumber :EventEmitter<number>=new EventEmitter();//自足将触发引发父组件的事件
  n:number=0;
  parentChange():void{
    console.log("123");
    this.changeNumber.emit(this.n++);
  }

  
}