###################
# BUILD FOR PRODUCTION
###################

FROM node:16.20.1-alpine3.17 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

RUN npm run generate-css-types
RUN npm run build

###################
# PRODUCTION
###################

FROM node:16.20.1-alpine3.17 AS production

# Copy the bundled code from the build stage to the production image
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist

ENTRYPOINT ["npx", "serve", "-s", "dist"]