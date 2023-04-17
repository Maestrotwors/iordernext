import { Injectable } from '@angular/core';
import { Role } from '@api-models/shared/auth';

@Injectable({ providedIn: 'root' })
export class UserService {

  getUserRole() {
    const memberShipType = localStorage.getItem('memberShipType') || '';
    
    switch (memberShipType) {
      case 'Customer':
        return Role.Customer;
      case 'Supplier':
        return Role.Supplier;
      case 'Admin':
        return Role.Admin;

      default:
        return Role.Guest;
    }
  }
}
