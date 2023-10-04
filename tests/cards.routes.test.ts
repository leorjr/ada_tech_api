import supertest from "supertest";
import { app } from "../src/app";

describe("Card Routes", () => {
  it("It shouldn't be possible to get the list of cards without a token", async () => {
    const response = await supertest(app).get("/api/cards");

    expect(response.statusCode).toBe(401);
    expect(response.body).toHaveProperty("error");
  });
});
