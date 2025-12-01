FROM node:22

WORKDIR /app

RUN apt-get update \
 && apt-get install -y --no-install-recommends git \
 && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/ruanyf/webpack-demos.git

WORKDIR /app/webpack-demos
RUN npm install

WORKDIR /app/webpack-demos/demo06
RUN npm install && npm run build

RUN mkdir -p /build/app2

EXPOSE 5173
CMD ["sh", "-c", "npm run build && cp -f bundle.js /build/app2/bundle.js && cp -f index.html /build/app2/index.html && tail -f /dev/null"]