import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Organization } from '../models/organization'
import {Observable} from "rxjs";

/*
  Generated class for the GithubOrganizations provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubOrganizations {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {}

  load(): Observable<Organization[]>{
    return this.http.get(`${this.githubApiUrl}/organizations`).map(res => <Organization[]>(res.json()))
  }

  loadDetails(login: string): Observable<Organization> {
    return this.http.get(`${this.githubApiUrl}/orgs/${login}`)
      .map(res => <Organization>(res.json()))
  }

}
