import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

export type ProfilePhotoAttributes = {
  id: string,
  user_id: string,
  data: string,
  created_at: string
}

export type ProfilePhotoRelations = {
  user: User,
}

export class ProfilePhoto extends Model<ProfilePhotoAttributes, ProfilePhotoRelations> {

  protected readonly urlPath = 'profile-photos';

}
