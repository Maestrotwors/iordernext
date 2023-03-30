import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { onlineStatus } from './online-status.type';

@Injectable({
  providedIn: 'root',
})
export class OfflineService {
  constructor() {
    this.listenToOnlineStatus();
  }
  private currentOnlineStatus = new BehaviorSubject(onlineStatus.online);
  public onlineStatus = this.currentOnlineStatus.asObservable();

  private listenToOnlineStatus(): void {
    window.addEventListener('online', () => {
      this.currentOnlineStatus.next(onlineStatus.online);
    });
    window.addEventListener('offline', () => {
      this.currentOnlineStatus.next(onlineStatus.offline);
    });
  }
}
