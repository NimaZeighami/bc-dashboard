package services

import (
	"github.com/NimaZeighami/bc-dashboard/backend/internal/models"
	"github.com/NimaZeighami/bc-dashboard/backend/internal/repository"
)

type ProjectService interface {
	Create(project *models.Project) error
	GetAll() ([]models.Project, error)
	GetByID(id uint) (*models.Project, error)
	Update(project *models.Project) error
	Delete(id uint) error
}

type projectService struct {
	repo repository.ProjectRepository
}

func NewProjectService(repo repository.ProjectRepository) ProjectService {
	return &projectService{repo: repo}
}

func (s *projectService) Create(project *models.Project) error {
	// todo: add validation logic here if needed
	return s.repo.Create(project)
}

func (s *projectService) GetAll() ([]models.Project, error) {
	return s.repo.GetAll()
}

func (s *projectService) GetByID(id uint) (*models.Project, error) {
	return s.repo.GetByID(id)
}

func (s *projectService) Update(project *models.Project) error {
	return s.repo.Update(project)
}

func (s *projectService) Delete(id uint) error {
	return s.repo.DeleteByID(id)
}
