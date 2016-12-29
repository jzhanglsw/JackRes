import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule, routingComponents} from './app.routing';

import { QuoteService } from './services/quote.service';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, HttpModule],
  declarations: [ AppComponent, routingComponents],
  providers: [ QuoteService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
