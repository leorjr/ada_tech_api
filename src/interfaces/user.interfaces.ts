interface UserInput {
  login: string;
  password: string;
}

interface UserOutput {
  id: number;
  login: string;
  password: string;
}

export { UserInput, UserOutput };
