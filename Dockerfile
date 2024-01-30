# frontend build stage
FROM node:16-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
COPY .npmrc ./
RUN  npm ci
COPY . .
# ARG mode=development

RUN npm run build 


# frontend production stage
FROM nginx:stable-alpine AS frontend

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend-builder /app/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
