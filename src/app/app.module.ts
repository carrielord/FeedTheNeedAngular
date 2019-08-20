import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule, MatGridListModule } from '@angular/material';
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
import { OrganizationindexComponent } from './component/organization/organization-index/organization-index.component';
import { OrganizationcreateComponent } from './component/organization/organization-create/organization-create.component';
import { OrganizationeditComponent } from './component/organization/organization-edit/organization-edit.component';
import { OrganizationDetailsComponent } from './component/organization/organization-details/organization-details.component';
import { OrganizationdeleteComponent } from './component/organization/organization-delete/organization-delete.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserEditComponent } from './component/useredit/useredit.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { PasswordchangeComponent } from './component/passwordchange/passwordchange.component';
import { ContactpageComponent } from './component/contactpage/contactpage.component';
import { OrganizationService } from './services/organization.service';
import { PostingService } from './services/posting.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { PostingdeleteComponent } from './component/postingdelete/postingdelete.component';
import { UserDeleteComponent } from './component/userdelete/userdelete.component';
import { PersonalizedlistofpostingsComponent } from './component/personalizedlistofpostings/personalizedlistofpostings.component';
import { PostinguserdetailComponent } from './component/postinguserdetail/postinguserdetail.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { UserdeleteadminComponent } from './component/userdeleteadmin/userdeleteadmin.component';




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
    UserEditComponent,
    UserdetailsComponent,
    PasswordchangeComponent,
    ContactpageComponent,
    HeaderComponent,
    PostingdeleteComponent,
    UserDeleteComponent,
    OrganizationDetailsComponent,
    OrganizationdeleteComponent,
    PersonalizedlistofpostingsComponent,
    PostinguserdetailComponent,
    UserlistComponent,
    UserdeleteadminComponent
 
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
    MatFormFieldModule,
    AppRoutingModule,
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