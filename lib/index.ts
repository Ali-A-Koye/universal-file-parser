import IndexType from "../types/index";
import { Request as ExpressRequest } from "express";
import { FastifyRequest } from "fastify";
import validate from "./validator/index";
const entry = (field: IndexType, req: ExpressRequest | FastifyRequest) => {

  let value = validate(req.body[field]);

  console.log(value);
  switch (value) {
    case "url":
      break;
    case "base64":
      break;
    case "string":
      break;
  }
};

export default entry;
