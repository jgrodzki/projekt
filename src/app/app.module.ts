import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedComponent } from './feed/feed.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    SidebarComponent,
    CardComponent,
    StoreItemComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
