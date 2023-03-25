import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Http403ErrorService {
	async handle403Error() {
		localStorage.clear();
		location.replace('/');
	}
}
