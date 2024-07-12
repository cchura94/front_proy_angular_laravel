import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ToastModule,
    ToolbarModule
  ],
  exports: [ToastModule, ToolbarModule]
})
export class PrimeModule { }
