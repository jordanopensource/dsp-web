FROM node:16-alpine3.14

# Create app directory

COPY package*.json /tmp/
RUN cd /tmp && npm install

WORKDIR /app
COPY . .

RUN mv /tmp/node_modules .

# Build NuxtJS project
RUN npm run build:modern

ENV HOST 0.0.0.0
# ENV API_BASE_URL https://dsp.dev.api.jordanopensource.org/
ENV API_BASE_URL https://dsp.api.prod.josa.ngo
EXPOSE 3000

# start command
CMD [ "npm", "run", "start"]
