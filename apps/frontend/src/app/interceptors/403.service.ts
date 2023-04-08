import { Injectable } from '@angular/core';
import { AuthService } from '@app/frontend/services';

@Injectable({ providedIn: 'root' })
export class Http403ErrorService {
	constructor(private authService: AuthService) {}

	async handle403Error() {
		this.authService.logOut();
	}
}
