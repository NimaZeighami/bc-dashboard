package server

import (
    "github.com/gin-gonic/gin"

    "github.com/NimaZeighami/bc-dashboard/backend/internal/routes"
    "github.com/NimaZeighami/bc-dashboard/backend/internal/appdeps"
    "github.com/NimaZeighami/bc-dashboard/backend/internal/handlers"
)

func SetupRouter(deps *appdeps.AppDeps) *gin.Engine {

	// gin.Default() : Creates a gin-engine / gin server / core-router
	// with default middleware: logger and recovery (crash-free) middleware
    router := gin.Default()

    // Register all route groups
    //* Handlers 
    projectHandler := handlers.NewProjectHandler(deps.Services.ProjectService)

    //* Services
	routes.RegisterProjectRoutes(router, projectHandler)

	// Portfolio
	// routes.RegisterPortfolioRoutes(router, protfolioHandler)
	// Auth/Login
	// routes.RegisterAuthRoutes(router, authHandler)
    // User
    // routes.RegisterUserRoutes(router, userHandler)


    router.Run()

    return router
}
