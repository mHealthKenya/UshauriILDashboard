FROM node:latest

# Working directory in your container
WORKDIR /opt/ushauriILDashboard

COPY package.json .

RUN npm install

RUN npm run build

ENV TIMEZONE Africa/Narobi

# Copy everything inside the current working directory to the container ideal path
COPY ./ /opt/ushauriILDashboard

EXPOSE 3001

CMD [ “npm”, “start” ] 
