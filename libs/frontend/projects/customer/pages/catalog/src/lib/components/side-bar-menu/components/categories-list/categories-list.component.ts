import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesListComponent {
  constructor() {}
  categories: BehaviorSubject<any> = new BehaviorSubject([]);

  identify(index: number, item: any) {
    return item.id;
  }
}
