import { ClientsFilterComponent } from './components/clients-filter/clients-filter.component';
import { ClientsDataComponent } from './components/clients-data/clients-data.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, ClientsDataComponent, ClientsFilterComponent],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsComponent {

}
