package models

import "time"

type Project struct {
	ID            uint      `gorm:"primaryKey" json:"id"`
	Title         string    `json:"title"`
	Description   string    `json:"description"`
	Category      string    `json:"category"`
	Status        string    `json:"status"`
	StartDate     time.Time `json:"start_date"`
	Deadline      time.Time `json:"deadline"`
	PricingModel  string    `json:"pricing_model"`
	PerPeriodRate float64   `json:"per_period_rate"`
	TotalCost     float64   `json:"total_cost"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`

	// Doer (Service Provider) info
	DoerID              uint   // FK to User table (service provider)
	DoerFirstName       string // denormalized for fast read
	DoerLastName        string
	DoerAvatarID        uint
	DoerServiceCategory string // from User.ServiceCategory

	// Client (Business Owner) info
	ClientID           uint
	ClientFirstName    string
	ClientLastName     string
	ClientAvatarID     uint
	ClientBusinessType string // from User.IndustrySector or BusinessType
	ClientMarketFocus  string // from User.MarketFocus
}

//TODO:  add avatarId field to Project , and its migration
