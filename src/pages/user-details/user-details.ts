import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

import { GithubUsers } from '../../providers/github-users';
import { ReposPage } from "../repos/repos";

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  user: User;
  login: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    githubUsers.loadDetails(this.login).subscribe(user => {
      this.user = user;
    });

  }
  search(login){
    console.log('search(login)');
    console.log(login);
    this.navCtrl.push(ReposPage, {login});
  }
}
