FROM node:24-alpine

ENV HOME=/home/app

WORKDIR $HOME

# Copy package files first for better caching
COPY assurmoi/package*.json ./

# Install dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy source code
COPY assurmoi/src ./src

EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
