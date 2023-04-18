import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SuppliersResolver {
  constructor() {}

  start() {
	this.getSuppliers();
  }

  private getSuppliers() {
	alert('---');
  }
}
