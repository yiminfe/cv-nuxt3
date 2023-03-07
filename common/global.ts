const isProd = process.env.NODE_ENV === 'production'

export const swFile = isProd ? '/sw-prod.js' : '/sw-dev.js'