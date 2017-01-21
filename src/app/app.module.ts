import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { GithubUsers } from '../providers/github-users';
import { GithubRepos } from '../providers/github-repos';
import { GithubOrganizations } from '../providers/github-organizations';
import {UserDetailsPage } from '../pages/user-details/user-details';
import {RepoDetailsPage } from '../pages/repo-details/repo-details';
import {OrganizationDetailsPage } from '../pages/organization-details/organization-details';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
	  UserDetailsPage,
    RepoDetailsPage,
    OrganizationDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
	  UserDetailsPage,
    RepoDetailsPage,
    OrganizationDetailsPage
  ],
  providers: [GithubUsers, GithubRepos, GithubOrganizations]
})
export class AppModule {}
