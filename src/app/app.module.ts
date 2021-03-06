import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { TableComponent } from './table/table.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';

import { FormsModule } from '@angular/forms';
import { EditNoticeComponent } from './edit-notice/edit-notice.component';
import { ViewNoticeComponent } from './view-notice/view-notice.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoticeComponent } from './notice/notice.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddNoticeComponent,
    EditNoticeComponent,
    ViewNoticeComponent,
    NoticeComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    InfiniteScrollModule,
    NgxSpinnerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
