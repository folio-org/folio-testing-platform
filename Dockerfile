FROM ubuntu:xenial

RUN useradd -ms /bin/bash folio

RUN apt-get -q update && \
    DEBIAN_FRONTEND="noninteractive" apt-get -q install -y \
    -o Dpkg::Options::="--force-confnew"  --no-install-recommends \
    wget curl net-tools && \
    apt-get -q clean -y && rm -rf /var/lib/apt/lists/* && \
    rm -f /var/cache/apt/*.bin

ENV NODEJS_VERSION 6


RUN wget --no-check-certificate --no-cookies https://deb.nodesource.com/setup_${NODEJS_VERSION}.x -O /tmp/node.sh  && \
    chmod +x /tmp/node.sh && \
    sh -c "/tmp/node.sh" && \
    rm -f /tmp/node.sh && \
    apt-get install nodejs && \
    npm install -g yarn

WORKDIR /usr/src/folio-testing-platform

COPY LICENSE /usr/src/folio-testing-platform/LICENSE
COPY package.json /usr/src/folio-testing-platform/package.json
COPY stripes.config.js /usr/src/folio-testing-platform/stripes.config.js
COPY docker-run.sh /usr/src/folio-testing-platform/docker-run.sh

RUN chown -R folio /usr/src/folio-testing-platform
USER folio

RUN yarn config set @folio:registry https://repository.folio.org/repository/npm-folio/
RUN yarn install

EXPOSE 3000
ENTRYPOINT ["./docker-run.sh"]

