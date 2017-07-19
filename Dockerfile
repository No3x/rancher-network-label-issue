FROM node:8.1.2

# Set current working directory as /home/app/code
WORKDIR /home/app/code

CMD sleep 5; node app.js
