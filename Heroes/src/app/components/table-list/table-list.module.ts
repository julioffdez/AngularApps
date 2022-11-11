import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { NgxSpinnerModule } from "ngx-spinner";
import { DialogModule } from '../dialog/dialog.module';
import { createTranslateLoader } from '../../translate/translate-hero.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TableListRoutingModule } from './table-list-routing.module';

@NgModule({
  declarations: [ListViewComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    NgxSpinnerModule,
    DialogModule,
    TableListRoutingModule,
    TranslateModule.forChild({
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
