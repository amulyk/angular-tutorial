import { Injectable } from '@angular/core';

import { data } from './currencies';

import {
  from,
  Observable
} from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  result;
  Observer;
  currencies;

  constructor(private httpClient: HttpClient) {
    this.currencies = data;

    this.Observer = new Observable(this.subscribe());
  }

  subscribe() {
    return (subsriber) => {
      let i = 0;
      const size = this.currencies.length;

      from(this.currencies).subscribe(currency => {
        const url = `https://api.exchangeratesapi.io/latest?symbols=${currency}`;
        this.httpClient
          .get(url)
          .subscribe(value => {
            i++;
            subsriber.next(value);

            if (i === size) {
              subsriber.complete();
            }
          });
      });
    };
  }
}
