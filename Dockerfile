FROM node:20-alpine
# Image Metadata
LABEL maintainer="Pooja Nerkar"
LABEL project="Watchtower Auto Deployment"
LABEL description="Zero-touch Docker deployment using GitHub Actions, Docker Hub and Watchtower"
LABEL version="1.0"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]