import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Organization } from '../../models/organization';
import { GithubOrganizations} from "../../providers/github-organizations";
import { OrganizationDetailsPage } from '../organization-details/organization-details'

@Component({
  selector: 'page-organizations',
  templateUrl: 'organisations.html'
})
export class OrganisationsPage {
  organizations: Organization[];

  constructor(public navCtrl: NavController, private githubOrganizations: GithubOrganizations) {
    githubOrganizations.load().subscribe(orgs =>{
      this.organizations = orgs;
    });
  };
  goToDetails(login: string) {
    this.navCtrl.push(OrganizationDetailsPage, {login});
  }

}
