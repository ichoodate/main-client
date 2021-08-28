import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

export type FacePhotoAttributes = {
  id: string;
  user_id: string;
  data: string;
  created_at: string;
};

export type FacePhotoRelations = {
  user: User;
};

export class FacePhoto extends Model<FacePhotoAttributes, FacePhotoRelations> {
  protected readonly urlPath = 'face-photos';
}
