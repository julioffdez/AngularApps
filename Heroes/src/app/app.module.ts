import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableListModule } from './table-list/table-list.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeroDataModule } from './hero-data/hero-data.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { InterceptorService } from './services/interceptor.service';
import { createTranslateLoader, TranslateHeroModule } from './translate/translate-hero.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableListModule,
    HeroDataModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    TranslateHeroModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
