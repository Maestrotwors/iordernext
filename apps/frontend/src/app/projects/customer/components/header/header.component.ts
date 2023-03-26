import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderHeaderComponent } from './components/under-header/under-header.component';
import { HeaderUserPanelComponent } from './components/header-user-panel/header-user-panel.component';
import { HeaderUserDeliveryPointComponent } from './components/header-user-delivery-point/header-user-delivery-point.component';
import { HeaderUserBasketComponent } from './components/header-user-basket/header-user-basket.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { BannerComponent } from './components/banner/banner.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    HeaderSearchComponent,
    BannerComponent,
    HeaderUserBasketComponent,
    UnderHeaderComponent,
    HeaderUserDeliveryPointComponent,
    HeaderUserPanelComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
