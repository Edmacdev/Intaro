import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsService } from './cards.service';
import { DeckComponent } from './deck/deck.component'
import { LayoutComponent } from './layout/layout.component';
import { ReadingComponent } from './reading/reading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LayoutComponent,
    ReadingComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
