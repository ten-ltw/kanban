FROM node:11.14.0

# This timezone setting should be updated
ENV TZ=Asia/Shanghai \
    DEBIAN_FRONTEND=noninteractive
RUN apt update \
    && apt install -y tzdata \
    && ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime \
    && echo ${TZ} > /etc/timezone \
    && dpkg-reconfigure --frontend noninteractive tzdata \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .
RUN npm i \
    && npm run build:prod
EXPOSE 1337
CMD [ "npm", "run", "serve:prod" ]
