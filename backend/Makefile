# Run project table migration up
project-table up:
	source .env && goose -dir internal/db/migrations postgres "$$DATABASE_URL" up

# Run project table migration down (rollback latest)
project-table down:
	source .env && goose -dir internal/db/migrations postgres "$$DATABASE_URL" down

# Run all migration tasks (customize as needed)
migrate: project-table-up
