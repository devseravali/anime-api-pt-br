import request from "supertest";
import express from "express";

const app = express();
app.get("/animes", (req, res) => {
  res.status(200).json([]);
});

describe("GET /animes", () => {
  it("deve retornar status 200 e um array", async () => {
    const res = await request(app).get("/animes");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
