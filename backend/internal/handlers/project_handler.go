package handlers

import (
	"net/http"
	"strconv"

	"github.com/NimaZeighami/bc-dashboard/backend/internal/models"
	"github.com/NimaZeighami/bc-dashboard/backend/internal/services"
	"github.com/gin-gonic/gin"
)

type ProjectHandler struct {
	service services.ProjectService
}

func NewProjectHandler(s services.ProjectService) *ProjectHandler {
	return &ProjectHandler{service: s}
}

func (h *ProjectHandler) Create() gin.HandlerFunc {
	return func(c *gin.Context) {
		var project models.Project
		if err := c.ShouldBindJSON(&project); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
			return
		}
		if err := h.service.Create(&project); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create project"})
			return
		}
		c.JSON(http.StatusCreated, project)
	}
}

func (h *ProjectHandler) GetAll() gin.HandlerFunc {
	return func(c *gin.Context) {
		projects, err := h.service.GetAll()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not fetch projects"})
			return
		}
		c.JSON(http.StatusOK, projects)
	}
}

func (h *ProjectHandler) GetByID() gin.HandlerFunc {
	return func(c *gin.Context) {
		idStr := c.Param("id")
		id, err := strconv.Atoi(idStr)
		if err != nil || id <= 0 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
			return
		}
		project, err := h.service.GetByID(uint(id))
		if err != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
			return
		}
		c.JSON(http.StatusOK, project)
	}
}

func (h *ProjectHandler) Update() gin.HandlerFunc {
	return func(c *gin.Context) {
		var project models.Project
		if err := c.ShouldBindJSON(&project); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
			return
		}
		if err := h.service.Update(&project); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update project"})
			return
		}
		c.JSON(http.StatusOK, project)
	}
}

func (h *ProjectHandler) Delete() gin.HandlerFunc {
	return func(c *gin.Context) {
		idStr := c.Param("id")
		id, err := strconv.Atoi(idStr)
		if err != nil || id <= 0 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
			return
		}
		if err := h.service.Delete(uint(id)); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete project"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Project deleted"})
	}
}
