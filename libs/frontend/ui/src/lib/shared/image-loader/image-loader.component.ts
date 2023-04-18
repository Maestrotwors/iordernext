import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input } from '@angular/core';
import { SpinnerSmallComponent } from '../loaders/spinner-small/spinner-small.component';
import { LazyLoadImageModule, StateChange } from 'ng-lazyload-image';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss'],
  standalone: true,
  imports: [SpinnerSmallComponent, CommonModule, LazyLoadImageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageLoaderComponent implements AfterViewInit {
  @Input() src: string | undefined = '';
  status: boolean | null = null;
  @HostBinding('class.image-class') class = 'image-class';
  constructor(private cdr: ChangeDetectorRef, private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    console.log(this.class);
  }
  notFound() {
    this.status = false;
    this.cdr.detectChanges();
  }

  loaded() {
    this.status = true;
    this.cdr.detectChanges();
  }

  callbackFunction(event: StateChange) {
    switch (event.reason) {
      case 'setup':
        // The lib has been instantiated but we have not done anything yet.
        break;
      case 'observer-emit':
        // The image observer (intersection/scroll/custom observer) has emit a value so we
        // should check if the image is in the viewport.
        // `event.data` is the event in this case.
        break;
      case 'start-loading':
        // The image is in the viewport so the image will start loading
        break;
      case 'mount-image':
        // The image has been loaded successfully so lets put it into the DOM
        break;
      case 'loading-succeeded':
        this.loaded();
        break;
      case 'loading-failed':
        this.notFound();
        break;
      case 'finally':
        // The last event before cleaning up
        break;
    }
  }
}
