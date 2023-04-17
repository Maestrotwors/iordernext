import { CacheModule as CM, Module } from "@nestjs/common";

import { CacheService } from "./cache.service";
import type { RedisClientOptions } from "redis";
import { env } from '@base/config/dev.env';
import { redisStore } from "cache-manager-redis-yet";

@Module({
  providers: [CacheService],
  imports: [
    CM.register<RedisClientOptions>({
      isGlobal: true,
      store: redisStore,
      url: `redis://${env.REDIS_HOST}:${env.REDIS_PORT}/0`,
      password: env.REDIS_PASSWORD,
      ttl: env.REDIS_TTL,
    }),
  ],
  exports: [CacheService],
})
export class CacheModule {}
