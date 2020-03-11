FROM centos:7
MAINTAINER Joseph Ziegler

USER root
RUN yum install -y curl
RUN curl -sSL https://rpm.nodesource.com/setup_13.x | bash -
RUN yum install -y build-essential git nodejs
RUN npm install -g grunt-cli
RUN git config --global url."https://".insteadOf git://

RUN mkdir -p /opt/devops
WORKDIR /opt/devops
COPY package.json /opt/devops
RUN npm install
COPY . /opt/devops
EXPOSE 3000

CMD [ "/usr/bin/node", "/opt/devops/server.js" ]
