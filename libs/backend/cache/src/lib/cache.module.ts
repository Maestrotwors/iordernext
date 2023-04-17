import { CacheModule, Module } from "@nestjs/common";

import { CacheService } from "./cache.service";
import type { RedisClientOptions } from "redis";
import { env } from '@backend/config/dev.env';
import { redisStore } from "cache-manager-redis-yet";

@Module({
  providers: [CacheService],
  imports: [
    CacheModule.register<RedisClientOptions>({
      isGlobal: true,
      store: redisStore,
      url: `redis://${env.REDIS_HOST}:${env.REDIS_PORT}/0`,
      password: env.REDIS_PASSWORD,
      ttl: env.REDIS_TTL,
    }),
  ],
  exports: [CacheService],
})
export class CacheffModule {}
