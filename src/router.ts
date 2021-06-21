import { Router } from "express";
import { createUserController } from "./UseCases/createUser";
import { findUserByIdController } from "./UseCases/findUserById/index";

const router = Router();

router.post("/users", (request, response)=>{
    return createUserController.handle(request, response); //handles the post and the request
});

router.get("/user/:id", (request, response)=>{
    return findUserByIdController.handle(request, response); //handles the post and the request
});

export {router};