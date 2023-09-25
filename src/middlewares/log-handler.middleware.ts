import { NextFunction, Request, Response } from "express";
import { format } from "date-fns";

function loggerMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const {
    method,
    body: { titulo },
    params: { id },
  } = request;

  const formatedDate = format(new Date(), "MM/dd/yyyy HH:mm:ss");

  const requestType = method == "DELETE" ? "Remover" : "Alterar";

  console.log(`${formatedDate} | Card ${id} | ${titulo} | ${requestType}`);

  next();
}

export { loggerMiddleware };
