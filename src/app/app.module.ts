import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PromoAreaComponent } from './promo-area/promo-area.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { ProductsComponent } from './products/products.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromoAreaComponent,
    CatagoriesComponent,
    ProductsComponent,
    MailingListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
