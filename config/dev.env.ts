export const env = {
	DATABASE_URL: "postgres://myuser:mypassword@localhost:5432/rakzin-roman-db",

	JWT_ACCESS_TOKEN_SECRET: "1111ggfdsde3bfdsly!@",
	JWT_ACCESS_TOKEN_DURATION: "20m",

	JWT_REFRESH_TOKEN_SECRET: "222ggfdsde3bfdsly#$@!!",
	JWT_REFRESH_TOKEN_DURATION: "14d",

	HASH_ROUNDS: 5,

	REDIS_HOST: "localhost",
	REDIS_PORT: 6379,
	REDIS_PASSWORD: "1234567890",
	REDIS_TTL: 0,

	KAFKA_HOST: "localhost",
	KAFKA_PORT: 29092
};




