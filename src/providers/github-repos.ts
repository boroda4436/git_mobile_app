import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Repo } from '../models/repo';

@Injectable()
export class GithubRepos {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {}

  // Load all github public repos
  load(): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/repositories`)
      .map(res => <Repo[]>res.json());
  }
  loadDetails(user: string, repoName: string): Observable<Repo> {
    return this.http.get(`${this.githubApiUrl}/repos/${user}/${repoName}`)
      .map(res => <Repo>(res.json()))
  }
  searchReposByOwner(owner: string): Observable<Repo[]>{
    return this.http.get(`${this.githubApiUrl}/users/${owner}/repos`)
      .map(res => <Repo[]>(res.json()))
  }

}
