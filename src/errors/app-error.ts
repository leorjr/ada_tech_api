interface IAppError {
  message: string;
  statusCode: number;
}

class AppError extends Error {
  public readonly message: string;
  public readonly statusCode: number;

  constructor({ message, statusCode = 400 }: IAppError) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { AppError };
