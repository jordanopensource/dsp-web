# set global args
ARG DSP_API_URL=https://dsp.api.prod.josa.ngo PORT=3000 USER=node HOST=0.0.0.0 MATOMO_SITE_ID=5

###########
# BUILDER #
###########
FROM node:16-alpine3.14 AS builder

# pass the global args
ARG DSP_API_URL
ARG HOST
ARG PORT
ARG MATOMO_SITE_ID

# Create app directory
WORKDIR /workspace
COPY . .
RUN npm install

# Inject the enviromental variables
ENV DSP_API_URL=$DSP_API_URL HOST=$HOST PORT=$PORT MATOMO_SITE_ID=$MATOMO_SITE_ID

# Build NuxtJS project
RUN npm run build

###########
# PROJECT #
###########
FROM node:16-slim

# pass the global args
ARG DSP_API_URL
ARG HOST
ARG PORT
ARG USER
ARG MATOMO_SITE_ID

# copy builder output to project workdir
WORKDIR /app
COPY --from=builder --chown=${USER}:${USER} /workspace/ /app/
COPY --from=builder --chown=${USER}:${USER} /workspace/.nuxt /app/.nuxt

# Inject the enviromental variables
ENV DSP_API_URL=$DSP_API_URL PORT=$PORT HOST=$HOST MATOMO_SITE_ID=$MATOMO_SITE_ID

# set user context
USER ${USER}

# expose port
EXPOSE ${PORT}

# start command
CMD [ "npm", "run", "start"]
