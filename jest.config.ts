module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"], // Padrão para encontrar arquivos de teste TypeScript
  setupFiles: ["dotenv/config"], // Se você usar variáveis de ambiente em seus testes
};
