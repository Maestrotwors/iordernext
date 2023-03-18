import { EventEmitter, Injectable } from '@angular/core';

import { ADAPTIVE } from '@fe-constants/adaptive';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Device } from './device.type';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';

@Injectable({
  providedIn: 'root',
})
export class AdaptiveService {
  private innerWidth = new Subject();

  public device: BehaviorSubject<Device> = new BehaviorSubject<Device>(
    Device.Desktop
  );
  public isMobile = new BehaviorSubject(
    window.innerWidth < ADAPTIVE.maxMobile ? true : false
  );
  public isTabletAndLess = new BehaviorSubject(
    window.innerWidth < ADAPTIVE.maxTabletAndLess ? true : false
  );
  public isTabletOrDesktop = new BehaviorSubject(
    window.innerWidth > ADAPTIVE.maxMobile ? true : false
  );
  public isSmallMobile = new BehaviorSubject(
    window.innerWidth < ADAPTIVE.maxSmallMobile ? true : false
  );
  public isDesktop = new BehaviorSubject(
    window.innerWidth >= ADAPTIVE.maxTabletAndLess ? true : false
  );

  constructor() {
    document.documentElement.style.setProperty(
      '--max-width-mobile',
      ADAPTIVE.maxMobile.toString() + 'px'
    );
    document.documentElement.style.setProperty(
      '--max-width-small-mobile',
      ADAPTIVE.maxSmallMobile.toString() + 'px'
    );
    document.documentElement.style.setProperty(
      '--max-width-tablet',
      ADAPTIVE.maxTabletAndLess.toString() + 'px'
    );

    this.innerWidth
      .pipe(debounceTime(50), distinctUntilChanged())
      .subscribe((data) => {
        this.changeData(data);
      });

    this.changeData(window.innerWidth);
  }

  public onResize$ = new EventEmitter<{ width: number; height: number }>();

  private changeData(width: any) {
    let device = Device.Desktop;

    // Set Desktop.
    if (width >= ADAPTIVE.maxTabletAndLess) {
      device = Device.Desktop;
      this.setTabletAndLess(false);
      this.setDesktop(true);
    } else {
      this.setTabletAndLess(true);
      this.setDesktop(false);
    }

    // Set tablet and Desktop.
    if (width > ADAPTIVE.maxMobile) {
      this.isTabletOrDesktop.next(true);
    } else {
      this.isTabletOrDesktop.next(false);
    }

    // Set tablet and less.
    if (width < ADAPTIVE.maxTabletAndLess) {
      device = Device.Tablet;
      this.setTabletAndLess(true);
    } else {
      this.setTabletAndLess(false);
    }

    // Set mobile.
    if (width < ADAPTIVE.maxMobile) {
      device = Device.Mobile;
      this.setMobile(true);
    } else {
      this.setMobile(false);
    }

    // Set small mobile.
    if (width < ADAPTIVE.maxSmallMobile) {
      device = Device.SmallMobile;
      this.setSmallMobile(true);
    } else {
      this.setSmallMobile(false);
    }

    this.device.next(device);
  }

  resize(event: Event) {
    this.innerWidth.next(event);
  }

  private setSmallMobile(isSmallMobile: boolean) {
    this.isSmallMobile.next(isSmallMobile);
  }

  private setMobile(isMobile: boolean) {
    this.isMobile.next(isMobile);
  }

  private setTabletAndLess(isTabletAndLess: boolean) {
    this.isTabletAndLess.next(isTabletAndLess);
  }

  private setDesktop(isDesktop: boolean) {
    this.isDesktop.next(isDesktop);
  }
}
