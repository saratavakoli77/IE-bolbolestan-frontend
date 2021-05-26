FROM node:lts-alpine3.10 AS builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# INSTALL DEPENDENCIES
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./

RUN yarn build 

RUN rm -rf .git .sentryclirc client/styles dist/*-report.html && \
    find . | grep -E ".*\.(map|log|lock|git|sh|vue|md)$" | tr '\n' '\0' | xargs -0 -n1 rm -rf



# SERVE USING NGINX
FROM nginx AS runner

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/build /var/www/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
