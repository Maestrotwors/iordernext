import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
  constructor() {}

  store: any = {
    userInfo: {
      name: 'Ракзін Роман Сергіович',
      memberShipType: 'PublicUser',
    },
    account: {},
  };
}
