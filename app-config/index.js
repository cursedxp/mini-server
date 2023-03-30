import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

//Sets the frontend origin for the cors
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:3000";

export default function (app) {
  /* Needed to accept requests from 'the outside'. CORS stands for cross origin resource sharing unless the request is made from the same domain, by default express wont accept POST requests */

  app.use(
    cors({
      origin: FRONTEND_ORIGIN,
    })
  );

  /*
  Needed to control which resources (such as scripts, stylesheets, and images) are allowed to be loaded by our application, and from which sources. 

  EXAMPLE SOURCE POLICY

  app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://example.com", "https://cdn.netlify.com"],
      styleSrc: ["'self'", "https://example.com"],
      imgSrc: ["'self'", "https://example.com"],
      connectSrc: ["'self'", "https://example.com", "https://api.netlify.com"],
      fontSrc: ["'self'", "https://example.com"],
      objectSrc: ["'none'"],
      mediaSrc: ["'none'"],
      frameSrc: ["'none'"]
    }
  })
);

  */

  // After the deployment of frontend we will limit source accesing by using contentSecurityPolicy. Currently our server accesable from anywhere
  app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

  // Morgen for loging HTTP request and the corresponding response, such as the HTTP method, URL
  app.use(morgan("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
}
