import { RecommendedDataComponent } from './components/recommended-data/recommended-data.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedMenuComponent } from './components/recommended-menu/recommended-menu.component';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [CommonModule, RecommendedDataComponent, RecommendedMenuComponent],
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendedComponent {

}
