FROM node:22-alpine
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY app.js .
RUN mkdir auth
EXPOSE 3001
CMD ["node", "app.js"]
