import { Injectable } from '@angular/core';
import { SelectCatalogProductsParams } from '@frontend/models/customer';
import { CustomerContractService } from '../core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CatalogActionsService {
  constructor(private customerContractService: CustomerContractService, private router: Router) {}

  selectCatalogProductsPage(params: SelectCatalogProductsParams = {}) {
    const contract = this.customerContractService.getContractQueryParams();
    const queryParams = { ...contract, page: 1, ...params };
    this.router.navigate(['/member-user/catalog'],{ queryParams });
  }

}
