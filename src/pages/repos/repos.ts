import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Repo } from '../../models/repo';
import { User } from '../../models/user';

import {GithubRepos} from '../../providers/github-repos'
import {RepoDetailsPage} from '../repo-details/repo-details'


@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
  repos: Repo[];
  originalRepos: Repo[];
  repoPageTitle: string;

  constructor(public navCtrl: NavController, private githubRepos: GithubRepos, private navParams: NavParams) {
    if (navParams.get('login')){
      let user = navParams.get('login');
      this.githubRepos.searchReposByOwner(user).subscribe(repos => {
        this.repos = repos;
        this.repoPageTitle = user + "'s repositories";
      });
    } else{
      githubRepos.load().subscribe(repos => {
        this.originalRepos = repos;
        this.repos = repos;
        this.repoPageTitle = "Public repositories";
      })
    }

  }
  goToDetails(user:User, name: string) {
    let login = user.login;
    this.navCtrl.push(RepoDetailsPage, {login, name});
  }
  search(searchEvent){
    let term = searchEvent.target.value;
    if (term == undefined || term.trim() === '' || term.trim().length < 3) {
      this.repos = this.originalRepos;
      this.repoPageTitle = "Public repositories";
    } else {
      this.githubRepos.searchReposByOwner(term).subscribe(repos => {
        this.repos = repos;
        this.repoPageTitle = term + "'s repositories";
      });
    }
  }
}
