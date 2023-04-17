import { UseGuards, applyDecorators } from "@nestjs/common";

import { AuthGuard } from '@backend/auth';
import { Role } from "@api-models/shared/auth";

export function Auth(roles: Role[]) {
	return applyDecorators(
		UseGuards(AuthGuard)
	);
}
