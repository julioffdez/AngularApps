import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroFormComponent } from './components/hero-data/hero-form/hero-form.component';
import { ListViewComponent } from './components/table-list/list-view/list-view.component';


const routes: Routes = [
  { path: 'list', component: ListViewComponent },
  { path: 'hero', component: HeroFormComponent },
  { path: 'hero/:id', component: HeroFormComponent },
  { path: '**', component: ListViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
