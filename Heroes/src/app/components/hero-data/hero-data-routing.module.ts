import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './hero-form/hero-form.component';


const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: HeroFormComponent }, 
      { path: ":id", component: HeroFormComponent }, 
      { path: "**", redirectTo: ""}      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroDataRoutingModule { }
