import IndexType from "../types/index";
import { Request as ExpressRequest } from "express";
import { FastifyRequest } from "fastify";
import validate from "./validator/index";
import base64ToBuffer from "./base64";
import urlToBuffer from "./url";
const entry = async (field: IndexType, req: ExpressRequest | FastifyRequest) => {

  let value = validate(req.body[field]);

  switch (value) {
    case "url": req.body[field] = await urlToBuffer(req.body[field]);break;
    case "base64": req.body[field] = base64ToBuffer(req.body[field]);break;
    case "string":
      break;
  }
};

export default entry;
