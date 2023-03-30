import express from "express";
import { Router } from "express";

const router = Router();

export default router.get("/", (req, res, next) => {
  res.json("All good in here");
});
