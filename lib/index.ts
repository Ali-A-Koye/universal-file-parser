import IndexType from "../types/index";
import { Request as ExpressRequest } from "express";
import { FastifyRequest } from "fastify";
import validate from "./validator/index";
import base64ToBuffer from "./base64";
import urlToBuffer from "./url";
import multipart from "./multipart";
const entry = async (
  field: IndexType,
  req: ExpressRequest | FastifyRequest
) => {
  let value = validate(req.body[field]);

  let result = await new Promise(async (resolve, reject) => {
    let data;
    switch (value) {
      case "url":
        data = await urlToBuffer(req.body[field]);
        break;
      case "base64":
        data = base64ToBuffer(req.body[field]);
        break;
      case "unknown":
        data = await multipart(req);
        break;
    }
    return resolve(data);
  });

  req.body[field] = result;
  
};

export default entry;
