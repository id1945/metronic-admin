import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [FirstLetterPipe, SafePipe],
  imports: [CommonModule],
  exports: [FirstLetterPipe, SafePipe],
})
export class CoreModule { }
