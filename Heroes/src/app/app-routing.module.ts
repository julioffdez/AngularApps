import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('../app/components/table-list/table-list.module').then(m => m.TableListModule)      
  },
  {
    path: 'hero',
    loadChildren: () => import('../app/components/hero-data/hero-data.module').then(m => m.HeroDataModule)      
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
