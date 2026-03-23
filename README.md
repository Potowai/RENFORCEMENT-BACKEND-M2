# AssurMoi API - Backend Reinforcement

This project is a NodeJS backend for an insurance management application ("AssurMoi").

## Technical Stack
- **NodeJS** with Express
- **MariaDB** for the database
- **Mailhog** for SMTP testing
- **Adminer** for database management
- **Docker** for orchestration

## Installation & Initialization

1. **Clone the Repository**
2. **Initialize with Docker:**
   The project is configured to run via Docker.
   ```bash
   docker-compose up --build -d
   ```
3. **Verify the setup:**
   ```bash
   curl http://localhost:3000
   ```

## Environment Configuration

Copy the example environment file and configure as needed:
```bash
cp assurmoi/.env.example assurmoi/.env
```

## Project Structure
- `assurmoi/src/index.js`: Main Entry Point
- `assurmoi/.env`: Environment configuration
- `docker-compose.yml`: Docker services definition

## Endpoints
- API: `http://localhost:3000`
- Mailhog UI: `http://localhost:8025`
- Adminer: `http://localhost:8080`
