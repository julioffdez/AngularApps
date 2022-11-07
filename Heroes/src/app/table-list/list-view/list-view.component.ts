import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { DialogDeleteComponent } from 'src/app/dialog/dialog-delete/dialog-delete.component';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/model/heroe';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  
  heroes = new MatTableDataSource<Heroe>();
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  constructor(private heroService:HeroesService, public dialog: MatDialog, private translateService:TranslateService) {
    //this.translateService.use(localStorage.getItem("appLanguage"));
   }
  
  ngAfterViewInit() {
    this.heroes.paginator = this.paginator;
  }

  ngOnInit() {
    this.getAllHeroes();
  }

  openDialog(heroId:number){
      const dialogRef = this.dialog.open(DialogDeleteComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.heroService.deleteHero(heroId).subscribe({
            next: () => this.getAllHeroes(),
            error: (err) => console.log("Error durante el borrado")
          });
        }
      });
  }

  getAllHeroes(){
    this.heroService.getHeroes().subscribe({
      next: (data:Heroe[]) => this.heroes.data = data,
    });
  }

  searchHeroes(term:string){
    this.heroService.getHeroes().subscribe({
      next: (data:Heroe[]) => this.heroes.data = data.filter((hero)=>hero.name.toLowerCase().includes(term.toLowerCase())),
    });
  }

}
