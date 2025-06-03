package models

import "gorm.io/gorm"


// ? Note: For anonymous fields, GORM will include its fields into its 
// ? parent struct like embeded tag
type Portfolio struct {
	gorm.Model  

}

//TODO:  add avatarId field to Portfolio