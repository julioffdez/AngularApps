import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from '../dialog/dialog.module';
import { createTranslateLoader, TranslateHeroModule } from '../translate/translate-hero.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ListViewComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    ListViewComponent
  ]
})
export class TableListModule { }
