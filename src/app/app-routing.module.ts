import{RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component'
import { ListofpostingsComponent } from './component/listofpostings/listofpostings.component'
import { LoginComponent } from './component/login/login.component'
import { OrganizationcreateComponent } from './component/organizationcreate/organizationcreate.component'
import { OrganizationeditComponent } from './component/organizationedit/organizationedit.component'
import { PasswordchangeComponent } from './component/passwordchange/passwordchange.component'
import { PostingcreateComponent } from './component/postingcreate/postingcreate.component'
import { PostingdetailComponent } from './component/postingdetail/postingdetail.component'
import { PostingeditComponent } from './component/postingedit/postingedit.component'
import { RegisterComponent } from './component/register/register.component'
import { UserdetailsComponent } from './component/userdetails/userdetails.component'
import { UsereditComponent } from './component/useredit/useredit.component'
import { ContactpageComponent } from './component/contactpage/contactpage.component'
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'listofpostings', component: ListofpostingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'organizationcreate', component: OrganizationcreateComponent },
  { path: 'organizationedit', component: OrganizationeditComponent },
  { path: 'passwordchange', component: PasswordchangeComponent },
  { path: 'postingcreate', component: PostingcreateComponent },
  { path: 'postingdetail', component: PostingdetailComponent },
  { path: 'postingedit', component: PostingeditComponent },

  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'useredit', component: UsereditComponent },
  { path: 'contactpage', component: ContactpageComponent },
  { path: '**', component: AppComponent }
];

@NgModule({


  // other imports here

  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
