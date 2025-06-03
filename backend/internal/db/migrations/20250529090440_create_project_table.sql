-- +goose Up
CREATE TABLE projects
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    start_date TIMESTAMP,
    deadline TIMESTAMP,
    pricing_model VARCHAR(50),
    per_period_rate NUMERIC(12, 2),
    total_cost NUMERIC(12, 2),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- ? id SERIAL PRIMARY KEY

-- Optional: enforce enum-like behavior for `status`
ALTER TABLE projects ADD CONSTRAINT status_check
CHECK (status IN ('pending', 'verified', 'canceled', 'in-progress', 'completed'));

-- +goose Down
DROP TABLE IF EXISTS projects;

