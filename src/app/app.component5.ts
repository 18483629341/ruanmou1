import { Component, OnInit} from '@angular/core';

interface Hero {
  id: number;
  name: string;
}
const Imgs:string[]=[
     '../assets/img/banner1.jpg',
     '../assets/img/banner2.jpg',
     '../assets/img/banner3.jpg',
     '../assets/img/banner4.jpg',
   ];
@Component({
  selector: 'app-root',
  templateUrl: './lunbo.component.html',
  styleUrls:['./app.component.css']

})
export class AppComponent {
   Imglist=Imgs;
   num:number=0;
   cc:boolean=false;
   ngOnInit():void{
    this.play();
   }
   a():void{
    console.log("5");
    this.num++;
    if(this.num==this.Imglist.length){
      this.num=0;
    }
   }

   
   play():void{
      setInterval(()=>{this.a()},1200);
   }
}