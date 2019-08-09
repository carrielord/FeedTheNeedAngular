import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './component/footer/footer.component';
import { ListofpostingsComponent } from './component/listofpostings/listofpostings.component';
import { PostingdetailComponent } from './component/postingdetail/postingdetail.component';
import { PostingcreateComponent } from './component/postingcreate/postingcreate.component';
import { PostingeditComponent } from './component/postingedit/postingedit.component';
import { OrganizationcreateComponent } from './component/organizationcreate/organizationcreate.component';
import { OrganizationeditComponent } from './component/organizationedit/organizationedit.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UsereditComponent } from './component/useredit/useredit.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { PasswordchangeComponent } from './component/passwordchange/passwordchange.component';
import { ContactpageComponent } from './component/contactpage/contactpage.component';
import { AuthService } from './services/auth.service';
import { OrganizationService } from './services/organization.service';
import { PostingService } from './services/posting.service';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListofpostingsComponent,
    PostingdetailComponent,
    PostingcreateComponent,
    PostingeditComponent,
    OrganizationcreateComponent,
    OrganizationeditComponent,
    LoginComponent,
    RegisterComponent,
    UsereditComponent,
    UserdetailsComponent,
    PasswordchangeComponent,
    ContactpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule
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
