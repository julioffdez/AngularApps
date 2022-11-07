import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [
    DialogDeleteComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  entryComponents: [
    DialogDeleteComponent,
  ],
  exports:[
    DialogDeleteComponent
  ]
})
export class DialogModule { }
