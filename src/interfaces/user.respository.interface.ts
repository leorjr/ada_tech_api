interface UserInput {
  name: String;
  email: String;
}

interface User {
  id: String;
  nome: String;
  email: String;
}

interface UserRepositoryInterface {
  registerUser(nome: String, email: String): Promise<User>;
}

export { UserRepositoryInterface, UserInput, User };
