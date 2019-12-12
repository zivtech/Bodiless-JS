FROM node:10.15.0-alpine
ARG SSG_HOME=/opt/ssg
COPY . $SSG_HOME
WORKDIR $SSG_HOME
RUN npm run setup
ENTRYPOINT ["npm","run"]
CMD ["start-docker"]
