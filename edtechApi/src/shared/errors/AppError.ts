interface IErrorContent {
    title: string
    message: string
  }
  
  export class AppError {
    public readonly content: IErrorContent
    public readonly statusCode: number
  
    constructor(content: IErrorContent, statusCode = 400) {
      this.content = content
      this.statusCode = statusCode
    }
  }
  