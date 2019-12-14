import * as contentful from 'contentful';

// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: 'g83ihylqsivb',
  accessToken: 'm6QoNTfnZ6QoikdAol64TpKaJfHP6lb2ekep3h7R2EA'
}

export default contentful.createClient(config);