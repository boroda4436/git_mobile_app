import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Repo} from '../../models/repo'

import { GithubRepos} from '../../providers/github-repos'
/*
  Generated class for the RepoDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html'
})
export class RepoDetailsPage {
  repo: Repo;
  user: string;
  name: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, public githubRepos: GithubRepos) {
    this.user = navParams.get('login');
    this.name = navParams.get('name');
    githubRepos.loadDetails(this.user, this.name).subscribe(repo=>{
      this.repo = repo;
    });
  }


}
