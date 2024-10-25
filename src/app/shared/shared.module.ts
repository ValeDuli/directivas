import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsDirective } from './directives/error-ms.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMsDirective,
    CustomIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMsDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
