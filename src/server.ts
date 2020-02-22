import express from 'express'
import bodyParser from 'body-parser'
import { connect } from 'mongoose'
import { env } from './environments'

const PORT = process.env.PORT || 3001

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

connect(env.databaseHost)
  .then(cnxn => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () =>
      console.log(
        `Express app started in ${
          process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
        } environment at ${env.apiHost}:${PORT}`
      )
    )
  })
  .catch(error => console.error(error))

export default app
