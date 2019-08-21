import{RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component'
import { ListofpostingsComponent } from './component/listofpostings/listofpostings.component'
import { LoginComponent } from './component/login/login.component'
import { OrganizationcreateComponent } from './component/organization/organization-create/organization-create.component'
import { OrganizationeditComponent } from './component/organization/organization-edit/organization-edit.component'
import { PasswordchangeComponent } from './component/passwordchange/passwordchange.component'
import { PostingcreateComponent } from './component/postingcreate/postingcreate.component'
import { PostingdetailComponent } from './component/postingdetail/postingdetail.component'
import { PostingeditComponent } from './component/postingedit/postingedit.component'
import { PostingdeleteComponent } from './component/postingdelete/postingdelete.component'
import { RegisterComponent } from './component/register/register.component'
import { UserdetailsComponent } from './component/userdetails/userdetails.component'
import { UserEditComponent } from './component/useredit/useredit.component'
import { UserDeleteComponent } from './component/userdelete/userdelete.component'
import { ContactpageComponent } from './component/contactpage/contactpage.component'
import { NgModule } from '@angular/core';
import { OrganizationindexComponent } from './component/organization/organization-index/organization-index.component';
import { OrganizationdeleteComponent } from './component/organization/organization-delete/organization-delete.component';
import { OrganizationDetailsComponent } from './component/organization/organization-details/organization-details.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { PostinguserdetailComponent } from './component/postinguserdetail/postinguserdetail.component';
import { UserdeleteadminComponent } from './component/userdeleteadmin/userdeleteadmin.component';
import { HomepageComponent } from './component/homepage/homepage.component'
import { UserdetailsadminComponent } from './component/userdetailsadmin/userdetailsadmin.component';

const routes: Routes = [
  
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomepageComponent },
  

  { path: 'posting', children: [
    { path: 'list', component: ListofpostingsComponent },
    { path: 'create', component: PostingcreateComponent },
    { path: 'detail/:id', component: PostingdetailComponent },
    { path: 'edit/:id', component: PostingeditComponent },
    { path: 'delete/:id', component: PostingdeleteComponent },
    { path: 'userdetail/:id', component: PostinguserdetailComponent }
  ]
},
  { 
    path: 'organizations', children: [
      { path: '', component: OrganizationindexComponent },
      { path: 'create', component: OrganizationcreateComponent },
      { path: 'detail/:id', component: OrganizationDetailsComponent },
      { path: 'edit/:id', component: OrganizationeditComponent },
      { path: 'delete/:id', component: OrganizationdeleteComponent }
    ]
  },
  { path: 'passwordchange', component: PasswordchangeComponent },
  { path: 'postingcreate', component: PostingcreateComponent },
  { path: 'postingdetail', component: PostingdetailComponent },
  { path: 'postingedit', component: PostingeditComponent },

  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'useredit', component: UserEditComponent },
  { path: 'userdelete', component: UserDeleteComponent },
  { path: 'userdeleteadmin/:id', component: UserdeleteadminComponent },
  { path: 'userdetailsadmin/:id', component: UserdetailsadminComponent},
  { path: 'contactpage', component: ContactpageComponent },
  { path: 'userlist', component: UserlistComponent }
  // { path: '**', component: AppComponent }
];

@NgModule({
  // other imports here
  imports: [RouterModule.forRoot(routes)], // {enableTracing: true}
  exports: [RouterModule]
})
export class AppRoutingModule { }
