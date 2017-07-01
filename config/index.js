export const env = {
  dev: 'development',
  prod: 'production'
}

export const origin = {
  dev: 'localhost:3000',
  prod: 'love394.com'
}

export const domain = process.env.NODE_ENV !== env.prod ? origin.dev : origin.prod