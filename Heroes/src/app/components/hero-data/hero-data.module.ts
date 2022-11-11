import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgxSpinnerModule } from "ngx-spinner";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../../translate/translate-hero.module';
import { HttpClient } from '@angular/common/http';
import { HeroDataRoutingModule } from './hero-data-routing.module';

@NgModule({
  declarations: [HeroFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxSpinnerModule,
    HeroDataRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports:[
    HeroFormComponent
  ]
})
export class HeroDataModule { }
