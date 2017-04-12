FROM ubuntu:xenial

RUN apt-get -q update && \
    DEBIAN_FRONTEND="noninteractive" apt-get -q install -y \
    -o Dpkg::Options::="--force-confnew"  --no-install-recommends \
    wget && \
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
COPY stripes.config.js /usr/src/folio-testing-platform/package.json

RUN yarn install
COPY docker-run.sh /usr/src/ui-testing/docker-run.sh

#ENTRYPOINT ["./docker-run.sh"]

