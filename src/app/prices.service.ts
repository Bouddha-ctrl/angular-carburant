import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class PricesService {
  constructor(private http: HttpClient) {}

  priceDate: Date;

  private extractData(res: Response): any {
    let day = this.priceDate.getDate().toString();
    let month = this.priceDate.getMonth().toString();
    let year = this.priceDate.getFullYear().toString();
    console.log('date :', day);
    const body = res;
    console.log(typeof body);
    console.log(body);
    return;
  }

  _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }

  getDieselPriceByDate(date: Date): Observable<any> {
    console.log(date);
    this.priceDate = date;
    let endPoint =
      //'www.theice.com/marketdata/DelayedMarkets.shtml?getHistoricalChartDataAsJson=&marketId=5444721&historicalSpan=2';
      'www.facebook.com';
    return this.http.get(endPoint);
  }
}
