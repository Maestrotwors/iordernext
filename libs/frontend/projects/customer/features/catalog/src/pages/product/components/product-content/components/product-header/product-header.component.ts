import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContractService } from '@frontend/projects/customer/shared/services/contract';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-header',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHeaderComponent {
  constructor(
    private customerContractService: ContractService,
    private router: Router
  ) {}

  goBack() {
    if (
      window.history.state !== null &&
      window.history.state.navigationId > 1
    ) {
      history.back();
    } else {
      const contract = this.customerContractService.getContractQueryParams();
      const queryParams = { ...contract, page: 1 };
      this.router.navigate(['/member-user/catalog'], { queryParams });
    }
  }
}
