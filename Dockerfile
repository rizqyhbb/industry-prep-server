FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "npm-shrinkwrap.json*", "./"]
RUN yarn --silent && mv node_modules ../
COPY . .
ENV PORT=${PORT}
ENV SECRET_KEY=${SECRET_KEY}
ENV DB_USER=${DB_USER}
ENV DB_PASSWORD=${DB_PASSWORD}
ENV DB_DATABASE=${DB_DATABASE}
ENV DB_HOST=${DB_HOST}
ENV DB_PORT=${DB_PORT}
# RUN psql -d postgres
# RUN \i sql/users-table.sql sql/todos-table.sql
# RUN \q
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]