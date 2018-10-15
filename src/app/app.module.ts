import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailComponent} from './detail.component';
import { LunboComponent} from './lunbo.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    LunboComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
