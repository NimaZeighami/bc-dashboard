package cache

import (
	"context"
	"github.com/go-redis/redis/v8"
)

func NewRedisClient(addr string) *redis.Client {
	rdb := redis.NewClient(&redis.Options{
		Addr: addr,
		DB:   0,
	})
	_ = rdb.Ping(context.Background()).Err()
	return rdb
}
