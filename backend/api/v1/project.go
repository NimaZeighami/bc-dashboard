package api

// !‌ Just DTOs

type ProjectReq struct {
	Name        string `json:"name" binding:"required"`
	Description string `json:"description"`
	Client      string `json:"client" binding:"required"`
	Status      string `json:"status" binding:"required,oneof=active completed archived"`
}

type ProjectRes struct {
    ID          uint   `json:"id"`
    Name        string `json:"name"`
    Description string `json:"description"`
    Client      string `json:"client"`
    Status      string `json:"status"`
}

type ProjectListReq struct {
	Page  int `json:"page" binding:"required,min=1"`
	Limit int `json:"limit" binding:"required,min=1,max=100"`
}

type ProjectListRes struct {
	Projects []ProjectRes `json:"projects"`
	Total    int          `json:"total"`
}
