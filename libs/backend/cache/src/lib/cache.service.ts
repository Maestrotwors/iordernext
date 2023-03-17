import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";

@Injectable()
export class CacheService {
	constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

	async getValueByKey(key) {
		return await this.cacheManager.get(key);
	}

	async setValue(key, value, ttl = 0) {
		await this.cacheManager.set(key, value, ttl);
	}

	async deleteValueByKey(key) {
		await this.cacheManager.set(key, {}, 1);
	}

	getStore() {
		return this.cacheManager.store;
	}

	async clear() {
		return await this.cacheManager.reset();
	}
}
