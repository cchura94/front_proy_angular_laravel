import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber'
import { InputTextareaModule } from 'primeng/inputtextarea';

const modulos = [
  TableModule,
  ToastModule,
  ToolbarModule,
  FileUploadModule,
  RadioButtonModule,
  InputNumberModule,
  InputTextareaModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modulos
    
  ],
  exports: [modulos]
})
export class PrimeModule { }
