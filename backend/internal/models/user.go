package models

import "gorm.io/gorm"

type User struct {
    gorm.Model

    FirstName          string `gorm:"not null" json:"first_name"`
    LastName           string `gorm:"not null" json:"last_name"`
    Username           string `gorm:"uniqueIndex;not null" json:"username"`
    Email              string `gorm:"uniqueIndex;not null" json:"email"`
    Phone              string `gorm:"uniqueIndex;not null" json:"phone"`
    Password           string `gorm:"not null" json:"-"`
    Role               string `gorm:"not null" json:"role"` // admin, "service_provider" or "business_owner"
    AvatarID           uint   `json:"avatar_id"`

    // Freelancer-specific fields
    ServiceCategory     string `gorm:"size:100" json:"service_category"`
    ServiceSpecialization string `gorm:"size:150" json:"service_specialization"`
    MinimumRate         uint   `json:"minimum_rate"`
    SocialMediaHandle   string `gorm:"size:100" json:"social_media_handle"`

    // Client-specific fields
    CompanyName         string `gorm:"size:150" json:"company_name"`
    IndustrySector      string `gorm:"size:100" json:"industry_sector"`
    MarketFocus         string `gorm:"size:150" json:"market_focus"`

    Projects            []Project `gorm:"foreignKey:UserID" json:"projects"`
}
