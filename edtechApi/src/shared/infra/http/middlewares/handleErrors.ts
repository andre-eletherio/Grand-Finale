import { NextFunction, Request, Response } from 'express'

import { AppError } from '../../../errors/AppError'

export const handleErrors = (
  error: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: NextFunction
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json(error.content)
  }

  return response.status(500).json({
    message: 'Internal server error'
  })
}
