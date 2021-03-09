FROM node:lts
LABEL maintainer="Firas Chbiki, firas.chbiki@sofrecom.com"

# Setting default dir
WORKDIR /app

# Copy package deps files
 COPY package*json ./

#Installing Packages
RUN npm install

# Copy Necessary files
 COPY . .


#Exposing Server Port
EXPOSE 1338

# Boostrapping the app
CMD ["node", "server.js"]