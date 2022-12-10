import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SafePipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    SafePipe
  ]
})
export class PipesModule { }