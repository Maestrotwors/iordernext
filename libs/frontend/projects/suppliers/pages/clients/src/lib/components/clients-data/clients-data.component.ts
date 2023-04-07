import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients-data.component.html',
  styleUrls: ['./clients-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsDataComponent {

}
