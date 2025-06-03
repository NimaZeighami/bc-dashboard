package appdeps

import (
	//? NOTE: Importing Best Practice Format
	//? 1. Standard Library
	//? 2. Third-Party Libraries
	//? 3. Internal Packages


	//* Importing Standard Library // EMPTY HERE
	//* Importing Third-Party Libraries 
	"github.com/go-redis/redis/v8"
	"github.com/sirupsen/logrus"
	"gorm.io/gorm"

	//* Internal Packages
	// "github.com/NimaZeighami/bc-dashboard/backend/internal/db"
	"github.com/NimaZeighami/bc-dashboard/backend/internal/repository"
	"github.com/NimaZeighami/bc-dashboard/backend/internal/services"
)

type OTPClient interface {
	SendOTP(phone string, code string) error
}

type Clock interface {
	NowUnix() int64
}

type AppDeps struct {
	DB        *gorm.DB
	Redis     *redis.Client
	OTPClient OTPClient
	Logger    *logrus.Logger
	Clock     Clock

	Services *Services
}

type Services struct {
	ProjectService services.ProjectService
	// PortfolioService services.PortfolioService
	// AuthService      services.AuthService
	// UserService      services.UserService
	// Add more services here
}

// todo : convert parameters to a struct
func BuildAppDeps(redisClient *redis.Client, logger *logrus.Logger, otp OTPClient, database *gorm.DB /*clk Clock*/) *AppDeps {

	//  Init repositories
	projectRepo := repository.NewProjectRepository(database)
	// portfolioRepo := repository.NewPortfolioRepository(database)
	// userRepo := repository.NewUserRepository(database)

	//  Init services
	projectService := services.NewProjectService(projectRepo)
	// portfolioService := services.NewPortfolioService(portfolioRepo)
	// authService := services.NewAuthService(userRepo)

	return &AppDeps{
		DB: database,
		// Redis, Logger, OTPClient, Clock => initialized elsewhere and injected later if needed
		Services: &Services{
			ProjectService: projectService,
			// PortfolioService: portfolioService,
			// AuthService: authService,
		},
	}
}


