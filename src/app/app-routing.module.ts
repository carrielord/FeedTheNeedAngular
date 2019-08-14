import{RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component'
import { ListofpostingsComponent } from './component/listofpostings/listofpostings.component'
import { LoginComponent } from './component/login/login.component'
import { OrganizationcreateComponent } from './component/organizationcreate/organization-create.component'
import { OrganizationeditComponent } from './component/organizationedit/organization-edit.component'
import { PasswordchangeComponent } from './component/passwordchange/passwordchange.component'
import { PostingcreateComponent } from './component/postingcreate/postingcreate.component'
import { PostingdetailComponent } from './component/postingdetail/postingdetail.component'
import { PostingeditComponent } from './component/postingedit/postingedit.component'
import { PostingdeleteComponent } from './component/postingdelete/postingdelete.component'
import { RegisterComponent } from './component/register/register.component'
import { UserdetailsComponent } from './component/userdetails/userdetails.component'
import { UsereditComponent } from './component/useredit/useredit.component'
import { ContactpageComponent } from './component/contactpage/contactpage.component'
import { NgModule } from '@angular/core';
import { OrganizationindexComponent } from './component/organizationindex/organization-index.component';


const routes: Routes = [
  
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'posting', children: [
    { path: 'list', component: ListofpostingsComponent },
    { path: 'create', component: PostingcreateComponent },
    { path: 'detail/:id', component: PostingdetailComponent },
    { path: 'edit/:id', component: PostingeditComponent },
    { path: 'delete/:id', component: PostingdeleteComponent },
  ]
},
  { 
    path: 'organizations', children: [
      { path: '', component: OrganizationindexComponent },
      { path: 'create', component: OrganizationcreateComponent },
      { path: 'detail/:id', component: OrganizationindexComponent },
      { path: 'edit/:id', component: OrganizationeditComponent },
      { path: 'delete/:id', component: OrganizationindexComponent }
    ]
  },
  { path: 'passwordchange', component: PasswordchangeComponent },
  { path: 'postingcreate', component: PostingcreateComponent },
  { path: 'postingdetail', component: PostingdetailComponent },
  { path: 'postingedit', component: PostingeditComponent },

  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'useredit', component: UsereditComponent },

  { path: 'contactpage', component: ContactpageComponent },
  // { path: '**', component: AppComponent }
];

@NgModule({
  // other imports here
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
