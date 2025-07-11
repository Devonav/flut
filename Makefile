.PHONY: init-repo up down logs validate-compose

# Initializes the git repository
init-repo:
	@echo "Initializing Git repository..."
	@git init
	@git add .
	@git commit -m "Initial commit: monorepo structure and config"

# Starts the development environment
up:
	@echo "Starting development containers..."
	@docker-compose up -d --build

# Stops the development environment
down:
	@echo "Stopping development containers..."
	@docker-compose down

# Tails the logs for all services
logs:
	@echo "Tailing logs..."
	@docker-compose logs -f

# Validates the production compose file
validate-compose:
	@echo "Validating production docker-compose file..."
	@docker-compose -f docker-compose.prod.yml config

