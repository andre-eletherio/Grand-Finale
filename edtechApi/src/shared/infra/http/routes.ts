import { Router } from 'express'
import { fiapRouter } from '../../../modules/stores/infra/http/routes'

const routes = Router()

routes.use('/fiap', fiapRouter)

export { routes }
