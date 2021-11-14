FROM node:12-alpine as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build
RUN ls /usr/src/app

FROM node:12-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
# Install deps for production only
COPY ./package.json ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/public ./public

CMD npm run prod