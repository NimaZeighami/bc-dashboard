package repository

import (
	"errors"
	"github.com/NimaZeighami/bc-dashboard/backend/internal/models"
	"gorm.io/gorm"
)

type ProjectRepository interface {
	Create(project *models.Project) error
	GetAll() ([]models.Project, error)
	GetByID(id uint) (*models.Project, error)
	Update(project *models.Project) error
	DeleteByID(id uint) error
}

type projectRepository struct {
	db *gorm.DB
}

func NewProjectRepository(db *gorm.DB) ProjectRepository {
	return &projectRepository{db: db}
}

func (r *projectRepository) Create(project *models.Project) error {
	return r.db.Create(project).Error
}

func (r *projectRepository) GetAll() ([]models.Project, error) {
	var projects []models.Project
	if err := r.db.Find(&projects).Error; err != nil {
		return nil, err
	}
	return projects, nil
}

func (r *projectRepository) GetByID(id uint) (*models.Project, error) {
	var project models.Project
	if err := r.db.First(&project, id).Error; err != nil {
		return nil, err
	}
	return &project, nil
}

func (r *projectRepository) Update(project *models.Project) error {
	if project == nil {
		return errors.New("project is nil")
	}
	if project.ID == 0 {
		return errors.New("missing project ID")
	}
	return r.db.Save(project).Error
}

func (r *projectRepository) DeleteByID(id uint) error {
	return r.db.Delete(&models.Project{}, id).Error
}
