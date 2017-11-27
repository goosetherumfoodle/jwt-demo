# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:8.7

# Override the base log level (info).
# ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir /reactapp
WORKDIR /reactapp
RUN  npm install -g serve   \
  && npm install -g jest    \
  && npm install -g webpack
COPY ./package.json /reactapp/package.json
COPY ./package-lock.json /reactapp/package-lock.json
RUN npm install
ADD . /reactapp
ARG GSNI_BASE_URL
ENV GSNI_BASE_URL=$GSNI_BASE_URL
RUN npm run-script build
VOLUME /reactapp/build

EXPOSE 3000
CMD serve --port 3000 -s build
