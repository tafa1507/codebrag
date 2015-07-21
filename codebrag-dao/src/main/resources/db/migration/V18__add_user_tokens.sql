CREATE TABLE IF NOT EXISTS "user_tokens"(
    "user_id" VARCHAR NOT NULL,
    "token" VARCHAR NOT NULL
);
ALTER TABLE "user_tokens" ADD CONSTRAINT IF NOT EXISTS "pk" PRIMARY KEY("token", "user_id");

ALTER TABLE "users" DROP COLUMN IF EXISTS "token";
