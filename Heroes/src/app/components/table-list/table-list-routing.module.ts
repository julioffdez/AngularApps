import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: ListViewComponent }, 
      { path: "**", redirectTo: ""}      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableListRoutingModule { }
