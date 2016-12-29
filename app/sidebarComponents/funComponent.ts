import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { Quote } from '../entity/quote';
import { QuoteService } from '../services/quote.service';

@Component({
  templateUrl: 'app/template/fun.component.html',
  styleUrls: ['app/css/main.css'],
  providers: [QuoteService]
})
export class FunComponent implements OnInit{
  quote: Quote;
  errorMessage: string = '';
  isLoading: boolean = true;

 constructor(private quoteService: QuoteService){ }
  ngOnInit(){
    this.quoteService
      .getQuote()
      .subscribe(
        quote => this.quote = quote,
      );
  } 
}
