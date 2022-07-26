import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './components/bookstore-app/filters/filters.component';
import { ProductListComponent } from './components/booktstore-app/product-list/product-list.component';
import { FooterComponent } from './components/shared/footer/footer.component'
@NgModule({
  declarations: [
    
  
    HeaderComponent,
            NavComponent,
            BookstoreAppComponent,
            FiltersComponent,
            ProductListComponent,
            FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
