import 'reflect-metadata'
require('dotenv').config();
import 'express-async-errors'
import '../../containers'
// import 'dotenv/config'
import cors  from 'cors'
import bodyParser from 'body-parser'
import { handleErrors } from './middlewares/handleErrors'
import express from 'express'
import { routes } from './routes'

import '../../containers'

const app = express()
app.use(cors())

app.use(bodyParser.json())

app.use(routes)

app.use(handleErrors)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
