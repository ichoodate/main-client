import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

export type TicketAttributes = {
  id: string,
  writer_id: string,
  subject: string,
  description: string,
  created_at: string,
  updated_at: string
}

export type TicketRelations = {
  writer: User
}

@Injectable()
export class Ticket extends Model<TicketAttributes, TicketRelations> {

  protected readonly urlPath = 'tickets';
}
