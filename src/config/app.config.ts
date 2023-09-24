import "dotenv/config";

const appConfig = {
  port: process.env.APP_PORT || 5000,
};

export { appConfig };
