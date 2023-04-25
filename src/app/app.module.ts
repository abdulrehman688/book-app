import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './component/create/create.component';
import { EditComponent } from './component/edit/edit.component';
import { IndexComponent } from './component/index/index.component';
import { ViewComponent } from './component/view/view.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    IndexComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
