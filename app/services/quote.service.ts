import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Quote } from '../entity/quote';
 
@Injectable()
export class QuoteService{
   private endpoint_url:String = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=";
 
   constructor(private http: Http){
   }
 
   getQuote(): Observable<Quote>{
   		var request = this.endpoint_url + "famous";

    	let quote$ = this.http
    	.get(request, {headers: this.getHeaders()})
    	.map(mapQuote);
    	return quote$;
   }

  private getHeaders(){
    let headers = new Headers();
    headers.append("X-Mashape-Key", "KO2s1twWj0mshntxgWivTmvRfw1Jp1caXYEjsnlFniLIMBS83A")
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append('Accept', 'application/json');
    return headers;
  }   
}

function mapQuote(response:Response): Quote{
  return toQuote(response.json());
}

function toQuote(r:any): Quote{
  let quote = <Quote>({
    quote: r.quote,
    author: r.author
  });
  console.log('Parsed quote:', quote);
  return quote;
}  