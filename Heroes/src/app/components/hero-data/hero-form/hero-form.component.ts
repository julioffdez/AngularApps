import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/model/heroe';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  
  heroId:number|null;
  heroForm: FormGroup;
  hero:Heroe;
  title:string = "";
  newUser:boolean = false;

  constructor(private route:ActivatedRoute, private formBuilder: FormBuilder, private heroService:HeroesService,
    private router:Router,private translateService:TranslateService) { 
  }
  
  ngOnInit() {
    this.heroForm = this.formBuilder.group({
      name: new FormControl('',[
          Validators.required,
          Validators.minLength(3),
        ]
      ),
      description: new FormControl(''),
      company: new FormControl('')
    });

    this.getFormDefaultValues();
  }
  
  private getFormDefaultValues():void{
    this.heroId = this.route.snapshot.params.id;
    if(this.heroId){
      this.heroService.getHeroe(this.heroId).subscribe({
        next: (data:Heroe)=>{
          this.hero = data;
          this.heroForm.get("name").setValue(this.hero.name.toUpperCase());
          this.heroForm.get("description").setValue(this.hero.description.toUpperCase());
          this.heroForm.get("company").setValue(this.hero.company.toUpperCase());
          this.title = this.hero.name;
        },
      });
    }
    else{
      this.newUser = true;
      this.translateService.getTranslation(this.translateService.currentLang).subscribe((data)=> this.title = data.newhero.title)
    }
  }

  public submitForm():void{
    if(this.heroForm.valid){
      if(this.newUser){
        this.heroService.addHero(this.heroForm.getRawValue()).subscribe({
          next: ()=>this.backToList(),
          error: (err)=>console.log("Error durante el borrado")
        });
      }else{
        this.heroService.updateHero(this.heroForm.getRawValue(), this.heroId).subscribe({
          next: ()=>this.backToList(),
          error: (err)=>console.log("Error durante el borrado")
        });
      }
    }
  }
  
  public backToList():void{
    this.router.navigate(['/list']);
  }

}
