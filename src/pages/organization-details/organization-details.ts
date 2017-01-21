import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubOrganizations } from "../../providers/github-organizations";
import {Organization} from "../../models/organization";

/*
  Generated class for the OrganizationDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organization-details',
  templateUrl: 'organization-details.html'
})
export class OrganizationDetailsPage {

  login: string;
  organization: Organization;
  constructor(public navCtrl: NavController, private navParams: NavParams, public githubOrganizations: GithubOrganizations) {
    this.login = navParams.get('login');
    githubOrganizations.loadDetails(this.login).subscribe(org=>{
      this.organization = org;
    })
  }
}
