import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

export type RoleAttributes = {
  id: string,
  user_id: string,
  type: string
}

export type RoleRelations = {
  user: User
}

export class Role extends Model<RoleAttributes, RoleRelations> {

  protected readonly urlPath = 'roles';

}
