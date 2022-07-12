import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooklistComponent } from './booklist/booklist.component';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BookviewComponent } from './bookview/bookview.component';
import { AuthorinfoComponent } from './authorinfo/authorinfo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AddbookComponent } from './addbook/addbook.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenreSelectorComponent } from './genre-selector/genre-selector.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'booksearch', component: BooklistComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'book/:book.title', component: BookviewComponent}, //:indicates something is being passed in
  {path: 'author/:author.fullname', component: AuthorinfoComponent},
  {path: 'addbook', component: AddbookComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    BooklistComponent,
    BookviewComponent,
    AuthorinfoComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AddbookComponent,
    GenreSelectorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
BrowserAnimationsModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,
      passThruUnknownUrl:true}
    ),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas:
})
export class AppModule { }
