import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private count: number = 0;

  constructor(public http: Http) {
    console.log('Hello GithubService Provider');
  }

  increment(): number{
    return ++this.count;
  }

}
