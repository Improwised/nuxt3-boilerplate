# Base node 12 image
FROM node:18-alpine

# Selects env
ARG MODE

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.7.0

# COPY ./package*.json ./
COPY ./package.json ./package-lock.json ./

# Install dependencies; remove existing node_modules, install dependencies at a time
RUN npm install && npm cache clean --force

# Add extra tools
RUN apk add --no-cache nginx supervisor wget curl

# Nginx puts pid files
RUN mkdir -p /run/nginx

# Copy nginx config file
COPY ./docker/nginx.conf /etc/nginx/nginx.conf

# Copy everything
COPY . ./

# Build project
RUN npm run build


# Rename env file based on Mode
RUN mv .env.${MODE} .env
# RUN mv .env.example .env

# Run on port 3000
EXPOSE 3000/tcp

# Start supervisior
CMD /usr/bin/supervisord -c ./docker/supervisiord.conf
