package models

import "time"

type Project struct {
	ID             uint      `gorm:"primaryKey" json:"id"`
	Title          string    `json:"title"`
	Description    string    `json:"description"`
	Category       string    `json:"category"`
	Status         string    `json:"status"`
	StartDate      time.Time `json:"start_date"`
	Deadline       time.Time `json:"deadline"`
	PricingModel   string    `json:"pricing_model"`
	PerPeriodRate  float64   `json:"per_period_rate"`
	TotalCost      float64   `json:"total_cost"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
}

//TODO:  add avatarId field to Project , and its migration