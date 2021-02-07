import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { ListPlansComponent } from './components/list-plans/list-plans.component';
import { UserSelectedPlansComponent } from './components/user-selected-plans/user-selected-plans.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPlansComponent,
    UserSelectedPlansComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
