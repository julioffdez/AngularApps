import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate-hero.component.html',
  styleUrls: ['./translate-hero.component.css']
})
export class TranslateHeroComponent implements OnInit {

  selectedLanguage = 'es';

  constructor(private translateService:TranslateService) { 
    localStorage.setItem("appLanguage",'en');
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  ngOnInit() {
  }
  
  public selectLanguage(lang: string):void {
    this.translateService.use(lang);
  }
}
