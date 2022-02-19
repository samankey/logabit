
import nuxt from 'nuxt';
import express from 'express';
import consola from 'consola';
import config from './nuxt.config.js';

const app = express();
config.dev = !(process.env.NODE_ENV === 'production');

async function start () {
  const nuxtjs = new nuxt.Nuxt(config);

  const { host, port } = nuxtjs.options.server;

  if (config.dev) {
    const builder = new nuxt.Builder(nuxtjs);
    await builder.build();
  } else {
    await nuxtjs.ready();
  }

  app.use(nuxtjs.render);

  app.listen(port, host);

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();
