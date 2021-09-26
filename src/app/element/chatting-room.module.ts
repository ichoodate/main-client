import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChattingRoomComponent } from './chatting-room.component';

@NgModule({
  declarations: [ChattingRoomComponent],
  exports: [ChattingRoomComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ChattingRoomModule {}
