import multer from "multer";
const upload = multer();
import { Request as ExpressRequest } from "express";
import { FastifyRequest } from "fastify";

const multipart = async (req: ExpressRequest | FastifyRequest) => {
  return new Promise((resolve, reject) => {
    let data;
    //@ts-ignore
    return upload.single("profile_image")(req, {}, function (err) {
      if (err) {
        console.log(err);
        return resolve("error")};
      //@ts-ignore
      data = req.file;
      return resolve(data);
    });
  });
};

export default multipart;
