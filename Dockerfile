FROM node:12

# Create app directory
WORKDIR /srv/app
ADD . /srv/app/

# RUN rm yarn.lock
RUN npm install

# Build NuxtJS project
RUN npm run build

ENV HOST 0.0.0.0
# ENV API_BASE_URL https://dsp.dev.api.jordanopensource.org/
ENV API_BASE_URL https://dsp.api.josa.ngo
ENV OTS_FORM_LINK https://ots.josa.ngo/assets/form/form.js
EXPOSE 3000

# start command
CMD [ "npm", "run", "start"]