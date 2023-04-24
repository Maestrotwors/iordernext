import { Injectable } from '@angular/core';
import { Role } from '@api-models/shared/auth';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouteHandlerService {
  constructor(private router: Router) {}

  navigate(value: Role): void {
    switch (value) {
      case Role.Customer:
        this.router.navigate(['/member-user/contracts']);
        break;

      case Role.Supplier:
        this.router.navigate(['/member-supplier/clients']);
        break;
		
      case Role.Admin:
        this.router.navigate(['/admin']);
        break;

      case Role.Guest:
        break;
    }
  }
}
