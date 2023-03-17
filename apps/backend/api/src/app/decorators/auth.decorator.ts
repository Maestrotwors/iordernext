import { SetMetadata, UseGuards, applyDecorators } from "@nestjs/common";

import { ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthGuard } from '../modules/auth/guards/auth.guard';
import { Role } from "@be-models/auth/roles";

export function Auth(roles: Role[]) {
	return applyDecorators(
		//SetMetadata("roles", roles),
		UseGuards(AuthGuard),
		ApiUnauthorizedResponse({ description: "Unauthorized" })
	);
}
