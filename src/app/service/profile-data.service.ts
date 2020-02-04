import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Obj } from 'src/app/model/obj'
import { User } from 'src/app/model/user';
import { UserIdealTypeKwdPvt } from 'src/app/model/user-ideal-type-kwd-pvt';
import { UserSelfKwdPvt } from 'src/app/model/user-self-kwd-pvt';

type UserKwdPvt = UserSelfKwdPvt | UserIdealTypeKwdPvt;

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  public static getData(keywords: UserKwdPvt[], user: User = undefined) {

    const data = _.chain({
      user: user,
      keywords: this.transformKeywords(keywords)
    });

    return {
      'age-range': {
        ageRange: data.result('keywords.keyword/age_range.0').value()
      },
      'name': {
        name: data.result('user.getAttrs.name').value()
      },
      'career': {
        career: data.result('keywords.keyword/career.0').value(),
      },
      'hobby': {
        hobbies: data.result('keywords.keyword/hobby').value(),
      },
      'nationality': {
        nationality: data.result('keywords.keyword/nationality.0').value()
      },
      'religion': {
        religion: data.result('keywords.keyword/religion.0').value()
      },
      'residence': {
        residence: data.result('keywords.keyword/residence.0').value(),
      },
      'stature': {
        stature: data.result('keywords.keyword/stature.0').value()
      },
      'stature-range': {
        statureRange: data.result('keywords.keyword/stature_range.0').value()
      },
      'weight': {
        weight: data.result('keywords.keyword/weight.0').value()
      },
      'weight-range': {
        weightRange: data.result('keywords.keyword/weight_range.0').value()
      }
    };
  }

  private static transformKeywords(keywords: UserKwdPvt[]) {

    return _.chain(keywords).map((userKwdPvt: UserKwdPvt) => userKwdPvt.getRelations().keyword)
      .groupBy((obj: Obj) => obj.getAttrs().type)
      .mapValues((collect: Obj[]) => {
        return _.chain(collect).map((model: Obj) => model.getRelations().concrete).value();
      })
      .value();
  }

}
