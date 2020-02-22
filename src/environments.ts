import { config } from 'dotenv'

config({ path: './.env' })

interface Environment {
  apiHost: string
  databaseHost: string
}

export const env: Environment = (() => {
  switch (process.env.NODE_ENV) {
    case 'test':
      return {
        apiHost: 'not configured',
        databaseHost: 'not configured'
      }
    case 'production':
      return {
        apiHost: 'not configured',
        databaseHost: 'not configured'
      }
    case 'development':
    default:
      return {
        apiHost: 'http://localhost',
        databaseHost: 'mongodb://localhost:27017/tugboat'
      }
  }
})()
