import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule, MatGridListModule} from '@angular/material';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListofpostingsComponent } from './component/listofpostings/listofpostings.component';
import { PostingdetailComponent } from './component/postingdetail/postingdetail.component';
import { PostingcreateComponent } from './component/postingcreate/postingcreate.component';
import { PostingeditComponent } from './component/postingedit/postingedit.component';
import { OrganizationindexComponent } from './component/organizationindex/organization-index.component';
import { OrganizationcreateComponent } from './component/organizationcreate/organization-create.component';
import { OrganizationeditComponent } from './component/organizationedit/organization-edit.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UsereditComponent } from './component/useredit/useredit.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { PasswordchangeComponent } from './component/passwordchange/passwordchange.component';
import { ContactpageComponent } from './component/contactpage/contactpage.component';
import { OrganizationService } from './services/organization.service';
import { PostingService } from './services/posting.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { PostingdeleteComponent } from './component/postingdelete/postingdelete.component';

const routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'listofpostings', component: ListofpostingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'organizationindex', component: OrganizationindexComponent },
  { path: 'organizationcreate', component: OrganizationcreateComponent },
  { path: 'organizationedit', component: OrganizationeditComponent },
  { path: 'passwordchange', component: PasswordchangeComponent },
  { path: 'postingcreate', component: PostingcreateComponent },
  { path: 'postingdetail', component: PostingdetailComponent },
  { path: 'postingedit', component: PostingeditComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ListofpostingsComponent,
    PostingdetailComponent,
    PostingcreateComponent,
    PostingeditComponent,
    OrganizationindexComponent,
    OrganizationcreateComponent,
    OrganizationeditComponent,
    LoginComponent,
    RegisterComponent,
    UsereditComponent,
    UserdetailsComponent,
    PasswordchangeComponent,
    ContactpageComponent,
    HeaderComponent,
    PostingdeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule
  ],

  providers: [
    AuthService,
    OrganizationService,
    PostingService,
    UserService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }