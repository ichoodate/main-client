import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChattingRoomModule } from 'src/app/element/chatting-room.module';
import { ChatContentComponent } from './chat.component';

const routes: Routes = [
  {
    path: '',
    component: ChatContentComponent,
  },
];

@NgModule({
  declarations: [ChatContentComponent],
  exports: [ChatContentComponent],
  imports: [CommonModule, ChattingRoomModule, RouterModule.forChild(routes)],
})
export class ChatContentModule {}
