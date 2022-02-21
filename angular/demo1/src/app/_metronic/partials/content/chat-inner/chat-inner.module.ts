import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { ChatInnerComponent } from './chat-inner.component';

@NgModule({
  declarations: [ChatInnerComponent],
  imports: [CommonModule, InlineSVGModule],
  exports: [ChatInnerComponent],
})
export class ChatInnerModule {}
