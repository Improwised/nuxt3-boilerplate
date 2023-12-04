# Base node 12 image
FROM node:18-alpine

# Selects env
ARG MODE

WORKDIR /usr/src/app


# COPY ./package*.json ./
COPY ./package.json ./package-lock.json ./

# Install dependencies; remove existing node_modules, install dependencies at a time
RUN npm install && npm cache clean --force


# Copy everything
COPY . ./

# Build project
RUN npm run build


# Rename env file based on Mode
RUN mv .env.${MODE} .env
# RUN mv .env.example .env

# Run on port 3000
EXPOSE 3000

# Start supervisior
CMD node .output/server/index.mjs
