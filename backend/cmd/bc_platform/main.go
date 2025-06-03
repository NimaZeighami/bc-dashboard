package main

import (
	"github.com/NimaZeighami/bc-dashboard/backend/internal/appdeps"
	"github.com/NimaZeighami/bc-dashboard/backend/internal/cache"
	// "github.com/NimaZeighami/bc-dashboard/backend/internal/clock"
	"github.com/NimaZeighami/bc-dashboard/backend/internal/db"
	"github.com/NimaZeighami/bc-dashboard/backend/internal/logger"
	// "github.com/NimaZeighami/bc-dashboard/backend/internal/handler"
	"github.com/NimaZeighami/bc-dashboard/backend/internal/otpclient"
	"github.com/NimaZeighami/bc-dashboard/backend/internal/server"
)

func main(){
	log:= logger.InitLogger()
	redis := cache.NewRedisClient("localhost:6379")
	otp := otpclient.NewKavehNegarClient("your-api-key")
	database:= db.InitDB()

	// deps := &appdeps.AppDeps{
	// 	DB:        database,
	// 	Redis:     redis,
	// 	OTPClient: otp,
	// 	Logger:    log,
	// 	Clock:     &clock.RealClock{},
	// }
	deps := appdeps.BuildAppDeps(redis, log, otp, database)

	server.SetupRouter(deps)
	
	log.Info("🚀 Starting BC Platform...")
	log.Info("deps:   ", deps)
}


//todo: add internal/errors/errors.go for API errors
//todo: prevent from create duplicate projects

