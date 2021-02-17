import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentInfTvshowComponent } from './current-inf-tvshow/current-inf-tvshow.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentInfTvshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
