FROM mhart/alpine-node:11 AS builder
WORKDIR /server
COPY . .
RUN npm install react-scripts -g --silent
RUN yarn install
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /server
COPY --from=builder /server/build .
CMD ["serve", "-p", "80", "-s", "."]doc
