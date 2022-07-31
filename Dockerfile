# set global args
ARG API_BASE_URL=https://dsp.api.prod.josa.ngo HOST=0.0.0.0 PORT=3000 USER=node

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
COPY --from=builder --chown=${USER}:${USER} /workspace/.nuxt /app/.nuxt
COPY --from=builder --chown=${USER}:${USER} /workspace/node_modules /app/node_modules
COPY --from=builder --chown=${USER}:${USER} /workspace/package.json /app/

# Inject the enviromental variables
ENV API_BASE_URL=${API_BASE_URL} HOST=${HOST} PORT=${PORT}

# set user context
USER ${USER}

# expose port
EXPOSE ${PORT}


# start command
CMD [ "npm", "run", "start"]
