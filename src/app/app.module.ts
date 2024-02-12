import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ProfileBannerComponent } from './components/profile-banner/profile-banner.component';
import { RepoDisplayComponent } from './components/repo-display/repo-display.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileBannerComponent,
    RepoDisplayComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
