package routes

import (
	"github.com/NimaZeighami/bc-dashboard/backend/internal/handlers"
	"github.com/gin-gonic/gin"
)

func RegisterProjectRoutes(r *gin.Engine, h *handlers.ProjectHandler) {
	group := r.Group("/api/v1/projects")
	{
		group.GET("/", h.GetAll())
		group.POST("/", h.Create())
		group.GET("/:id", h.GetByID())
		group.PUT("/:id", h.Update())
		group.DELETE("/:id", h.Delete())
	}
}
