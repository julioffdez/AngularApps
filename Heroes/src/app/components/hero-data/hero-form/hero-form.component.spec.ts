import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroFormComponent } from './hero-form.component';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { InterceptorService } from 'src/app/services/interceptor.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TableListModule } from 'src/app/components/table-list/table-list.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/translate/translate-hero.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Prueba Unitaria Add Hero Form', () => {
  let component: HeroFormComponent;
  let fixture: ComponentFixture<HeroFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [  
          HeroFormComponent
          ],
      imports:[
            ReactiveFormsModule,
            FormsModule,
            CommonModule,
            NgxSpinnerModule,
            AppRoutingModule,
            TableListModule,
            HttpClientTestingModule,
            TranslateModule.forRoot({
              loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
              }
            })
      ],
      providers: [
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
      ]
    },
    )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Prueba HeroForm válido: ', () => {

    const heroName = component.heroForm.controls['name'];
    heroName.setValue("pruebaHero");
    
    expect(component.heroForm.valid).toBeTruthy();
  });
});
