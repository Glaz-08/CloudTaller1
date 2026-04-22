# syntax=docker/dockerfile:1

FROM node:22-alpine AS builder

WORKDIR /app

# Instala dependencias
COPY package*.json ./
RUN npm install --no-audit --no-fund

# Copia el proyecto y compila
COPY . .
RUN npm run build


FROM node:22-alpine AS runtime

WORKDIR /app
ENV NODE_ENV=production

# Instala solo dependencias de producción
COPY package*.json ./
RUN npm install --production --no-audit --no-fund && npm cache clean --force

# Copia solo lo necesario
COPY --from=builder /app/dist ./dist

# Ejecuta como usuario no root
USER node

EXPOSE 3000

CMD ["npm", "start"]
