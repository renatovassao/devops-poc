# --- Stage 1: Build & Dependencies ---
FROM node:26-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Stage 2: Final Runtime ---
FROM node:26-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /usr/src/app .
USER node
EXPOSE 3000
CMD ["node", "dist/app.js"]