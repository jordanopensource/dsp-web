# set global args
ARG API_BASE_URL=https://dsp.api.prod.josa.ngo PORT=3000 USER=node HOST=0.0.0.0

###########
# BUILDER #
###########
FROM node:16-alpine3.14 AS builder

# pass the global args
ARG API_BASE_URL
ARG HOST
ARG PORT

# Create app directory
WORKDIR /workspace
COPY . .
RUN npm install

# Inject the enviromental variables
ENV API_BASE_URL=${API_BASE_URL} HOST=${HOST} PORT=${PORT}

# Build NuxtJS project
RUN npm run build

###########
# PROJECT #
###########
FROM node:16-slim

# pass the global args
ARG API_BASE_URL
ARG HOST
ARG PORT
ARG USER

# copy builder output to project workdir
WORKDIR /app
COPY --from=builder --chown=${USER}:${USER} /workspace/ /app/
COPY --from=builder --chown=${USER}:${USER} /workspace/.nuxt /app/.nuxt

# Inject the enviromental variables
ENV API_BASE_URL=${API_BASE_URL} PORT=${PORT} HOST=${HOST}

# set user context
USER ${USER}

# expose port
EXPOSE ${PORT}


# start command
CMD [ "npm", "run", "start"]
