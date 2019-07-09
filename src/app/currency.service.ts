import { Injectable } from '@angular/core';

import { data } from './rates';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  result;
  Observer;

  constructor() {
    this.result = this.transformObjectToArray(data.rates);

    this.Observer = {
      result: this.result,
      subscribe: this.subscribe,
      filter: this.filter,
      map: this.map
    };
  }

  filter(cb) {
    this.result = this.result.filter(cb);

    return this;
  }

  map(cb) {
    this.result = this.result.map(cb);

    return this;
  }

  transformObjectToArray(obj) {
    const items = [];
    const keys = Object.keys(obj);

    for (const key of keys) {
      const value = obj[key];

      const item = {
        currency: key,
        value
      };

      items.push(item);
    }

    return items;
  }

  subscribe(next, complete) {
    let i = 0;
    const size = this.result.length;

    for (const item of this.result) {
      if (i < size) {
        setTimeout(() => {
          next(item);
        }, i * 500);
      }

      i++;
    }

    if (i === size) {
      setTimeout(() => {
        complete(size);
      }, i * 500);
    }
  }
}
