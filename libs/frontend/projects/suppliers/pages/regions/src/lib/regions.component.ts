import { RegionsMenuComponent } from './components/regions-menu/regions-menu.component';
import { RegionsDataComponent } from './components/regions-data/regions-data.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regions',
  standalone: true,
  imports: [CommonModule, RegionsDataComponent, RegionsMenuComponent],
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsComponent {

}
