import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailComponent} from './detail.component';
//import { UserComponent} from './user.component';
import {StatePipe} from './app.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    //UserComponent,
    StatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
