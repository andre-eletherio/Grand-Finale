import { Request, Response, Router } from 'express'
import { LoginController } from '../controllers/LoginController'
import { RegisterController } from '../controllers/RegisterController'
import { GetQuestionController } from '../controllers/GetQuestionController'
import { AlterNameController } from '../controllers/AlterNameController'
import { DeleteAccountController } from '../controllers/DeleteAccountController'
import { GetProfileController } from '../controllers/getProfileController'

const fiapRouter = Router()

const registerController = new RegisterController()
const loginController = new LoginController()
const getQuestionController = new GetQuestionController()
const alterNameController = new AlterNameController()
const deleteController = new DeleteAccountController()
const getProfileController = new GetProfileController()

fiapRouter.get('/', (req: Request, res: Response) => {res.send({message: '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'})})
fiapRouter.post('/register', (req: Request, res: Response) => registerController.handle(req, res))
fiapRouter.post('/login', (req: Request, res: Response) => loginController.handle(req, res))
fiapRouter.get('/question/:name', (req: Request, res: Response) => getQuestionController.handle(req, res))
fiapRouter.patch('/name', (req: Request, res: Response) => alterNameController.handle(req, res))
fiapRouter.delete('/', (req: Request, res: Response) => deleteController.handle(req, res))
fiapRouter.get('/profile/:id', (req: Request, res: Response) => getProfileController.handle(req, res))


export { fiapRouter }