require('dotenv').config()
import express from 'express'
import config from 'config'
import connectToDb from './utils/connectToDb'
import log from './utils/logger'
import router from './routes'
import deserializeUser from './middleware/deserializeUser'

const app = express()
app.use(express.json())
app.use(deserializeUser)
app.use(router)

const port = config.get('port') || 3000

app.listen(port, () => {
  log.info(`Server listing at http://localhost:${port}`)
  connectToDb()
})
