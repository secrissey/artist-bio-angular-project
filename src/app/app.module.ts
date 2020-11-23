import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{ SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';

import { AddArtistFormComponent } from './add-artist-form/add-artist-form.component';
import { FormsModule } from '@angular/forms';
import { ArtistItemListComponent } from './artist-item-list/artist-item-list.component';
import { ArtistItemCardComponent } from './artist-item-list/artist-item-card/artist-item-card.component';
import { EditItemModalComponentComponent } from './edit-item-modal/edit-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    HomeComponent,
    AddArtistFormComponent,
    ArtistItemListComponent,
    ArtistItemCardComponent,
    EditItemModalComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
