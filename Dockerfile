From node:14.16.1

WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .
CMD ["npm", "start"]
